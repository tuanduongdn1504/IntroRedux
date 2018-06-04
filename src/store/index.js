import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
/* support debug and review store */

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    ...applyMiddleware(thunk),
  )
)
export default store
//store everything