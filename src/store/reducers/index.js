import { combineReducers } from 'redux';
import { countReducer } from './constReducer';

export const rootReducer = combineReducers({ count: countReducer })



