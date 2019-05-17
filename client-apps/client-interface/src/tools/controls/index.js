export * from "./generic"
export * from "./string"
export * from "./form-validator"


export const createControl = ({controls, errorMessage }) => value =>
  controls.every(control => control(value)) ? "" : errorMessage

export const isError = (error) => {
  if (!error) {
    return false
  }
  return error !== ""
}

export default createControl
