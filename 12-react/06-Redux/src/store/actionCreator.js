/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 16:45:37
*/
import {
    ADD_ITEM,
    CHANGE_ITEM,
    DEL_ITEM,
    LOAD_DATA
} from './actionTypes.js'

import axios from 'axios'

export const getChangeItemAction = (task)=>({
    type: CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: DEL_ITEM,
    payload: index   
})


export const getLoadInitDataAction = (payload)=>({
    type:LOAD_DATA,
    payload
})

/*
下面是一个错误的设想
export const getLoadInitDataAction = (payload)=>{
   axios.get('http://127.0.0.1:3000')
    .then(result=>{
        return  {
            type:LOAD_DATA,
            payload:result.data
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
*/



