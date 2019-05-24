import { $myFetch } from "."


export const $sendSignInForm = values => {
  return $myFetch({
    path: "user/client",
    options: { body: JSON.stringify(values), method: "POST" }
  }).then(res => res.json())
}
