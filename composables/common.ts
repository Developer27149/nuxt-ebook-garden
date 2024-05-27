import { NIcon } from "naive-ui";

export const wrapQuery = (
  url: string,
  obj: Record<string, string | number>
) => {
  return `${url}?${Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&")}`;
};

export const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};
