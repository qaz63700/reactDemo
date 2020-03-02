import React, { Component } from 'react';
import 'antd/dist/antd.css'
import TodoListUI from './TodoLIstUI'
import store from './store'
//关键代码-------------start
import {changeInputAction , addItemAction ,deleteItemAction,getListAction,getTodoList,getMyListAction} from './store/actionCreatores'
//关键代码------------end
import axios from 'axios'
class TodoList extends Component {
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
}
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
         );
    }
    storeChange(){
        console.log('store changed')
        this.setState(store.getState())
    }
    //--------关键代码------start
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        console.log(index)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount(){
        // const action = getTodoList()
        // store.dispatch(action)

        const action =getMyListAction()
        store.dispatch(action)
        console.log(action)
    }
    //--------关键代码------end
}
export default TodoList;