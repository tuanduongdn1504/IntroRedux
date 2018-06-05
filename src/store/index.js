import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
/* support debug and review store */
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    ...applyMiddleware(sagaMiddleware),
  )
)
sagaMiddleware.run(rootSaga)
export default store
//store everything