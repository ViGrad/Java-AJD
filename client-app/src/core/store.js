import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"

import reducer from "./reducers"

const configureStore = () => {
  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV !== "production"
  })

  const middlewares = [thunk, promise, loggerMiddleware]

  const store = createStore(reducer, applyMiddleware(...middlewares))

  return store
}

export default configureStore()
