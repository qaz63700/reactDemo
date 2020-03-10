import React, { useState,useEffect } from 'react';

function Example(){
        const[count,setCount] = useState(0);
        useEffect(()=>{
                console.log(`useEffect=>You clicked ${count} times`)
        })
        // let _useState=useState(0);
        // let count=_useState[0];
        // let setState=_useState[1];
        return(
                <div>
                        点击{count} 次数
                        <button onClick={()=>setCount(count+1)}>点击</button>
                </div>
        )
}

export default Example;