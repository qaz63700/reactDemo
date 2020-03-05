import React, { Component } from 'react';
// import store from './store'
import { connect } from 'react-redux';
class TodoList  extends Component {

        render() { 
                return ( 
                        <div>
                                <input value={this.props.inputValue}  onChange={this.props.inputChange}/>
                                <button onClick={this.props.clickButton}>提交</button>
                                <ul>
                                      {
                                              this.props.list.map((item,index)=>{
                                                return (<li key={index}>{item}</li>)
                                            })
                                      } 
                                </ul>
                        </div>
                 );
        }
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