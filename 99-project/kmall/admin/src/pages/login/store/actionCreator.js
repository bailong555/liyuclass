import axios from 'axios'

import {  } from ''

import * as types  from './actionTypes.js'

export const getChangeItemAction = (task)=>({
    type:types.CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:types.ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: types.DEL_ITEM,
    payload: index   
})


const getLoadInitDataAction = (payload)=>({
    type:types.LOAD_DATA,
    payload
})

export const getLoginAction = (values)=>{
    return (dispatch,getState)=>{
        values.role = 'admin'
        axios({
            method:'post',
            url:'http://127.0.0.1:3000/sessions/users',
            data:values
        })
        .then(result=>{
            //console.log(result)
            const data = result.data
            if(data.code == 0){
                //1.在前端保存登录信息
                //2.跳转到后台首页
            }
            else{
                message.error(data.message)
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试')
        })        
    }
}



