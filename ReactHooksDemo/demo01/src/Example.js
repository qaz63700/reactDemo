import React, { useState } from 'react';

function Example(){
        const[count,setCount] = useState(0)
        return(
                <div>
                        点击{count} 次数
                        <button onClick={()=>setCount(count+1)}>点击</button>
                </div>
        )
}

export default Example;