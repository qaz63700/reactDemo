import React, { Component } from 'react';
// import store from './store'
import { connect } from 'react-redux';
const TodoList = (props)=>{
        let {inputValue,inputChange,clickButton,list}=props
        return ( 
                <div>
                        <input value={inputValue}  onChange={inputChange}/>
                        <button onClick={clickButton}>提交</button>
                        <ul>
                                {
                                        list.map((item,index)=>{
                                        return (<li key={index}>{item}</li>)
                                        })
                                } 
                        </ul>
                </div>
                );
}
const stateToProps=(state)=>{
	return{
                inputValue:state.inputValue,
                list:state.list
	}
}

const dispatchToProps = (dispatch) =>{
        return {
                inputChange(e){
                        let action = {
                                type:'change_input',
                                value:e.target.value
                        }
                        dispatch(action)
                },
                clickButton(){
                        // console.log(111)
                        let action = { type:'add_item' }
                        dispatch(action)
                }
        }
    }
export default connect(stateToProps,dispatchToProps)(TodoList);