import axios from 'axios'
import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MYLIST}  from './actionTypes'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.studyinghome.com/mock/5e5128aeca6994415ce3480d/ReactDemo01/Xiaojiejie').then((res)=>{
            const data = res.data
            console.log(data)
            const  action= getListAction(data);
            dispatch(action)
        })
    }
}

export const getMyListAction = () =>{
    type:GET_MYLIST
}