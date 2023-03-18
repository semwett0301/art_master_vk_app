import {createStore} from 'redux'
import {combineReducer} from './reducers/combineReducer'

export const store = createStore(combineReducer)
