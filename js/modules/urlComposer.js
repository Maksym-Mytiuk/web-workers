const HTTP_URL = `https://picsum.photos/`;

export function createUrl({param}) {
  return HTTP_URL + param
}