import axios from 'axios'

import { message } from 'antd'

import {saveUsername} from 'util'

import * as types  from './actionTypes.js'

export const getLoginReqestStartAction = (task)=>({
    type:types.Login_Reqest_Start,
})

export const getLoginDoneStartAction = (task)=>({
    type:types.Login_Done_Start,
})


export const getLoginAction = (values)=>{
    return (dispatch,getState)=>{
        dispatch(getLoginReqestStartAction())
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
                saveUsername(data.data.username)
                //2.跳转到后台首页
                window.location.href="/"
            }
            else{
                message.error(data.message)
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试')
        })   
        .finally(()=>{
            dispatch(getLoginDoneStartAction())
        })     
    }
}



