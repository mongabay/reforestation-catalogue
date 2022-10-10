export const logEvent = (name: string, parameters: Record<string, any> = {}) => {
  if (!window['gtag']) {
    return;
  }

  if (process.env.NODE_ENV === 'production') {
    window['gtag']('event', name, parameters);
  } else {
    console.info(`[GA] Event: ${name}, ${JSON.stringify(parameters, null, 2)}`);
  }
};
