import {combineReducers} from 'redux';
import { textReducer } from './wordReducer';

export const rootReducer = combineReducers({
    text: textReducer,
});