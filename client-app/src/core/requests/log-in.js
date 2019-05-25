import { $myFetch } from "."


export const $sendLoginForm = values => {
  return $myFetch({
    path: "user/client/login",
    options: { body: JSON.stringify(values), method: "POST" }
  }).then(res => res.json())
}
