import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as Appreducer} from './redux/reducer'
const rootreducer = combineReducers({Appreducer})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk))


export{store}