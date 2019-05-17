export * from "./sign-in"

export const $myFetch = ({
  path,
  options,
  params = [],
}) => {
  const route = `http://localhost:8080/${path}${
    params.length > 0 ? "&" : ""
  }${params.map(param => param.key + "=" + param.value).join("&")}`
  
  const headers = {
    "Content-Type": "application/json"
  }

  options.headers = {
    ...headers,
    ...options.headers
  }

  return fetch(route, options)
}