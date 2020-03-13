import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index(){
                useEffect(()=>{
                        console.log('老大你来了')
                        return()=>{
                                console.log('老大你走了了')
                        }
                },[])
        return(<h2>jspang.com</h2>)
}
function List(){
        useEffect(()=>{
                console.log('老第你来了')
        })
        return(<h2>List page</h2>)
}


function Example(){
        const[count,setCount] = useState(0);
        useEffect(()=>{
                console.log(`=====`)
        },[count])
        return(
                <div>
                        点击{count} 次数
                        <button onClick={()=>setCount(count+1)}>点击</button>

                        <Router>
                                <ul>
                                      <li> <Link to="/" >首页</Link> </li> 
                                      <li> <Link to="/list" >列表</Link> </li> 
                                </ul>
                                <Route exact  path='/' component={Index}></Route>
                                <Route   path='/list' component={List}></Route>
                        </Router>
                </div>
        )
}

export default Example;