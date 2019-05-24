import { $myFetch } from "."

export const $fetchUserAccounts = (userId) => {
  return $myFetch({
    path: `account/${userId}`,
    options: { method: "GET" }
  }).then(res => res.json())
}

export const $createAccount = (userId, values) => {
  return $myFetch({
    path: `account/${userId}`,
    options: { body: JSON.stringify(values), method: "POST" }
  })
}
