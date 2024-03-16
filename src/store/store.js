import { createStore, combineReducers, applyMiddleware } from 'redux';
import { timerReducer } from '../reducers/timerReducers';
import {thunk} from 'redux-thunk';



const rootReducer = combineReducers({
    timerState: timerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;