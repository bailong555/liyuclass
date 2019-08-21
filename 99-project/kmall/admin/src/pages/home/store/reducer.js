
import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    isFetching:false
})

export default (state=defaultState,action)=>{
    if(action.type == types.Login_Reqest_Start){
        return state.set('isFetching',true)
    }
    else{
        return state.set('isFetching',false)
    }
    return state
}