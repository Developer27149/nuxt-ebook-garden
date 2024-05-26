export const wrapQuery = (
  url: string,
  obj: Record<string, string | number>
) => {
  return `${url}?${Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&")}`;
};
