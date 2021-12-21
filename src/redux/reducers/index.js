import { combineReducers } from "redux";
import {fetchData} from './fetchData'
import {cart} from './cart'
export default combineReducers({fetchData, cart })