import api from 'api'
import { message } from 'antd'

import {saveUsername} from 'util'

import * as types  from './actionTypes.js'

const getLoginReqestStartAction = (task)=>({
    type:types.Login_Reqest_Start,
})

const getLoginDoneStartAction = (task)=>({
    type:types.Login_Done_Start,
})


export const getLoginAction = (values)=>{
    return (dispatch,getState)=>{
        dispatch(getLoginReqestStartAction())
        values.role = 'admin'
        api.login(values)
        .then(result=>{
            if(result.code == 0){
                //1.在前端保存登录信息
                saveUsername(result.data.username)
                //2.跳转到后台首页
                window.location.href="/"
            }
            else{
                message.error(result.message)
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试')
        })   
        .finally(()=>{
            dispatch(getLoginDoneStartAction())
        })
        /*axios({
            method:'post',
            url:'http://127.0.0.1:3000/sessions/users',
            data:values,
            withCredentials:true
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
        })*/     
    }
}



