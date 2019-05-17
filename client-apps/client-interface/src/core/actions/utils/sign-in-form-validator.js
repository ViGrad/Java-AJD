import {
  isLongerThan,
  isOnlyString,
  createInputValidator
} from "../../../tools/controls"
import { RESSOURCE_NAMES } from "../../reducers/ressource_names"
import { checkFormValues } from "../../../tools/controls/form-validator"

export const passwordValidator = value => {
  const controls = [isLongerThan(6)]
  const errorMessage = "Votre mot de passe doit avoir au moins 6 caracteres"

  return createInputValidator({
    controls,
    nullable: false,
    errorMessage,
    nullValue: 0
  })(value)
}

export const nonNullableStringValidator = value => {
  const controls = [isOnlyString]
  const errorMessage = "Ce champs est obligatoire et ne dois comporter que des lettres"

  return createInputValidator({
    controls,
    nullable: false,
    errorMessage,
    nullValue: 0
  })(value)
}

const SIGN_IN_FORM_VALIDATORS = {
  [RESSOURCE_NAMES.SIGN_IN_FORM.FIRST_NAME]: nonNullableStringValidator,
  [RESSOURCE_NAMES.SIGN_IN_FORM.NAME]: nonNullableStringValidator,
  [RESSOURCE_NAMES.SIGN_IN_FORM.PASSWORD]: passwordValidator
}
export const checkSignInFormValidityAndReturnErrors = formValues =>
  checkFormValues(formValues, SIGN_IN_FORM_VALIDATORS)

export default checkSignInFormValidityAndReturnErrors
