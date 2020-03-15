import React,{useState,useMemo} from 'react'

function Example7(){
        const [Xiaohong,setXiaohong] =useState('小红在待机状态')
        const [Zhiling,setZhiling] =useState('志林在待机状态')

        return(
                <div>
                        <button onClick={()=>{setXiaohong(new Date().getTime())}}>
                                小红
                        </button>
                        <button onClick={()=>{setZhiling(new Date().getTime()+'志林走过来')}}>
                                志玲
                        </button>
                        <ChildCompoent name={Xiaohong}>{Zhiling}</ChildCompoent>
                </div>
        )
}

function ChildCompoent({name,children}){

        function changeXiaohong(name){
                console.log('她来了，她来了。小红向我们走来了')
                return name+',小红向我们走来了'
        }
        const actionXiaohong=useMemo(()=>changeXiaohong(name),[name])
        return(
                <div>
                        <div>{actionXiaohong}</div>
            <           div>{children}</div>
                </div>
        )
}

export  default Example7