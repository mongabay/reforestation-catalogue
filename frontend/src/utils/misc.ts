export const toTitleCase = (string: string) => {
  if (string.length === 0) {
    return '';
  }

  return `${string[0].toLocaleUpperCase()}${string.slice(1)}`;
};
