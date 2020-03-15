import React, { useRef, useState, useEffect } from 'react';

function Example8(){
        const inputEl =useRef(null);
        const onButtonCclik=()=>{
                inputEl.current.value='hello'
                console.log(inputEl)
        }
        const [text,setText]=useState('jspang')
        const textRef=useRef();

        useEffect(()=>{
                textRef.current=text;
                console.log('textRef.current:', textRef.current)
        })
        return(
                <div>
                        <input ref={inputEl}  type='text'/>
                        <button onClick={onButtonCclik}>在input上展示文字</button>
                        <br/>
                        <br/>
                        <input value={text} onChange={(e)=>{setText(e.target.value)}}/> 

                </div>
        )

}
export  default Example8