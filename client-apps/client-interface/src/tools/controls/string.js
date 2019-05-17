export const isLongerThan = (minLength) => value => value.length > minLength
export const isOnlyString = (value) => /^[a-zA-Z]+$/.test(value);