//index.js
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
const Home = () => {

        
        function gotoXiaojiejie(){
                Router.push({
                        pathname:"/xiaojiejie",
                        query:{name:'佟丽娅'}
                })
        }
        
        return(
                <>
        
                <div>我是首页</div>
                <div>
                <Link href={{pathname:'/xiaojiejie',query:{name:"多野结衣"}}}><a>选波多野结衣</a></Link><br/>
                    <Link href="/xiaojiejie?name=苍井空"><a>选苍井空</a></Link>
                </div>
                <div>
                        <button onClick={gotoXiaojiejie}>选择</button>
                </div>
                <Link href="/jspang?name=苍井空"><a>选JSPang</a></Link>
              </>
        )
}

export default Home