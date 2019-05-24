export const getJsonValueByPath = (json, path) => path.split(".").reduce(
  (accumulator, value) => accumulator[value],
  json
)