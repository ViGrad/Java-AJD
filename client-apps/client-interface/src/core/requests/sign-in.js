import { $myFetch } from "."

export const $sendSignInForm = values => {
  return $myFetch({
    path: "client",
    options: { body: JSON.stringify(values), method: "POST" }
  })
}
