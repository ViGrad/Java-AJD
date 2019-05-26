export const arrayToOptions = (array, { key, text, value }) =>
  array.map(element => ({
    key: element[key],
    text: element[text],
    value: element[value]
  }))
