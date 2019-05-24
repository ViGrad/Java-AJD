import { fetchedListCreator, getValues, getIsLoading } from "./creators/fetched-list"
import { RESSOURCE_NAMES } from "./ressource_names"
import { getJsonValueByPath } from "../../tools/get-json-value-by-path";

export default fetchedListCreator({
  ressourceName: RESSOURCE_NAMES.ACCOUNTS.LIST
})

const PATH_TO_STATE = "accounts"
const transform = state => getJsonValueByPath(state, PATH_TO_STATE)

export const getAccounts = (state) => getValues(transform(state))
export const getAccountsIsLoading = (state) => getIsLoading(transform(state))