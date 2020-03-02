// import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
// import reducer from './reducer'    
// import thunk from 'redux-thunk'

// const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore( reducer, enhancer) // 创建数据存储仓库
// export default store   //暴露出去

import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'   
//------关键代码----start----------- 
import createSagaMiddleware from 'redux-saga' 
const sagaMiddleware = createSagaMiddleware();
//------关键代码----end-----------
import mySagas from './sagas' 
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
//------关键代码----start-----------
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
//------关键代码----end-----------

const store = createStore( reducer, enhancer) // 创建数据存储仓库

sagaMiddleware.run(mySagas)
export default store   //暴露出去