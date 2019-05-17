import { isNullOrEmpty } from "./generic"
import createControl from "."

export const createInputValidator = ({
  controls,
  nullable = true,
  errorMessage = "Merci de renseigner correctement ce champs",
  nullValue = ""
}) => value => {
  if (nullable && (isNullOrEmpty(value) || value === nullValue)) {
    return ""
  }

  return createControl({ controls, errorMessage })(value)
}

export const checkFormValues = (formValues, validators) => {
  return Object.keys(validators).reduce((accumulator, key) => {
    accumulator[key] = validators[key](formValues[key])
    return accumulator
  }, {})
}

export const isNotAnyErrorInFormValidityResponse = errors =>
  Object.values(errors).every(errorMessage => errorMessage === "")
