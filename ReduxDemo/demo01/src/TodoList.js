import React, { Component } from 'react';
import 'antd/dist/antd.css'
import TodoListUI from './TodoLIstUI'
import store from './store'
//关键代码-------------start
import {changeInputAction , addItemAction ,deleteItemAction,getListAction} from './store/actionCreatores'
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
        axios.get('https://www.studyinghome.com/mock/5e5128aeca6994415ce3480d/ReactDemo01/Xiaojiejie').then((res)=>{
            const data=res.data;
            console.log(res)
            const action=getListAction(data);
            store.dispatch(action)
        })
    }
    //--------关键代码------end
}
export default TodoList;