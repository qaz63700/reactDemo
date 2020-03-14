import React, { useState,createContext,useContext} from 'react';
const countContext=createContext()
function Counter(){
        let count=useContext(countContext)
return(<h2>{count}</h2>)
}

function Example(){
        const[count,setCount] = useState(0);
       
        return(
                <div>
                        点击{count} 次数
                        <button onClick={()=>setCount(count+1)}>点击</button>
                        <countContext.Provider value={count} >
                                <Counter/>
                        </countContext.Provider>
                </div>
        )
}

export default Example;