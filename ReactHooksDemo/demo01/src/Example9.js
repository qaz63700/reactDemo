import React, { useState,useEffect,useCallback } from 'react';

function useWinSize(){
        const [size,setSize]=useState({
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight
        })

        const onReszie=useCallback(()=>{
                setSize({
                        width:document.documentElement.clientWidth,
                        height:document.documentElement.clientHeight
                })
        },[])
        useEffect(()=>{
                window.addEventListener('resize',onReszie)
                return ()=>{
                    window.removeEventListener('resize',onReszie)
                }
            },[])
        
        return size;

}

function Example9(){
        const size=useWinSize()
        return(
                <div>页面Size:{size.width}x{size.height}</div>
        )
}

export default Example9