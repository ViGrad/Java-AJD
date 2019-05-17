export const isNullOrEmpty = value =>
  !value ||
  value == undefined ||
  value === "" ||
  value.length === 0 ||
  (typeof value === "object" && Object.keys(value).length === 0)
