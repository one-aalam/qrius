// eslint-disable-next-line import/prefer-default-export
export const domainamify = (url: string) =>
  url.indexOf('://') !== -1 ? url.split('://')[1].split('/')[0].replace('www.', '') : url;
