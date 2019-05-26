import { $myFetch } from "."

export const $makeTransfer = values => {
  return $myFetch({
    path: `transfer`,
    options: {
      body: JSON.stringify(values),
      method: "POST"
    }
  })
}
