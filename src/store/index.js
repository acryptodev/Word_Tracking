import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import logger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
// import from "react"

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store