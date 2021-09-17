export const createQueryParams = <T extends Object>(queryParams: T) => (
  Object.entries(queryParams).reduce((prev, [ key, value ]) => (`${prev}${key}=${value}&`), "?").slice(0, -1)
)