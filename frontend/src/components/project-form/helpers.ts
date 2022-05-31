import { MutableRefObject } from 'react';

export const getFormValues = (formRef: MutableRefObject<HTMLFormElement>) => {
  const formData = new FormData(formRef.current);
  const inputs = Array.from(formRef.current.elements);

  const correctType = (key: string, value: FormDataEntryValue) => {
    const input = inputs.find((i) => i.getAttribute('name') === key);

    if (!input || value instanceof File) {
      return value;
    }

    const isNumber = input.getAttribute('type') === 'number';
    const isBoolean =
      input.getAttribute('type') === 'radio' && (value === 'false' || value === 'true');
    const isUrl =
      input.getAttribute('type') === 'text' && input.getAttribute('data-type') === 'url';

    if (isNumber) {
      return value.length > 0 ? +value : undefined;
    }

    if (isBoolean) {
      return value === 'true';
    }

    if (isUrl) {
      return value.startsWith('http://') || value.startsWith('https://')
        ? value
        : `https://${value}`;
    }

    return value;
  };

  return Array.from(formData.keys()).reduce((res, key) => {
    const value =
      formData.getAll(key).length > 1
        ? formData.getAll(key).map((value) => correctType(key, value))
        : correctType(key, formData.get(key));

    const hasNestedPath = /.+\[\d+\]\..+/.test(key);
    if (hasNestedPath) {
      const rootKey = key.split(/\[\d+\]\./)[0];
      const nestedKey = key.split(/\[\d+\]\./)[1];
      const index = +key.match(/.+\[(\d+)\]\..+/)[1];

      return {
        ...res,
        [rootKey]: Array.from({ length: Math.max(res[rootKey]?.length ?? 0, index + 1) }, (v, i) =>
          i === index ? { ...(res[rootKey]?.[i] ?? {}), [nestedKey]: value } : res[rootKey]?.[i]
        ),
      };
    }

    return {
      ...res,
      [key]: value,
    };
  }, {});
};
