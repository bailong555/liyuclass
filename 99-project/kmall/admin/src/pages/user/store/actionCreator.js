import api from 'api'

import { message } from 'antd'

import {saveUsername} from 'util'

import * as types  from './actionTypes.js'

const getPageReqestStartAction = (task)=>({
    type:types.PAGE_REQEST_START,
})

const getPageDoneStartAction = (task)=>({
    type:types.PAGE_DONE_START,
})

const getSetPageAction = (payload)=>({
    type:types.SET_PAGE,
    payload
})

export const getPageAction = (page)=>{
    return (dispatch,getState)=>{
        dispatch(getPageReqestStartAction())
        api.getUserList({
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                dispatch(getSetPageAction(result.data))
            }
            else{
                message.error('获取用户数据失败,请稍后再试')
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试')
        })
        .finally(()=>{
            dispatch(getPageReqestStartAction())
        })
    }
}



