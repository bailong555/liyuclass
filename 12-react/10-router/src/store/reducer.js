// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import {reducer as todulistReducer} from '../pages/todulist/store'

export default combineReducers({
    todulist:todulistReducer
})