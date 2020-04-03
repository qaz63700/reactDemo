import React,{useState} from 'react'
import Head from 'next/head'
import {Col,Row,List} from 'antd'
import Link from 'next/Link'
import {HomeOutlined,SettingFilled,SmileOutlined} from '@ant-design/icons';
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer';
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import '../static/style/pages/index.css'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
const Home = (list) =>{

	const renderer = new marked.Renderer();
	marked.setOptions({
	  renderer: renderer,
	  gfm: true,
	  pedantic: false,
	  sanitize: false,
	  tables: true,
	  breaks: false,
	  smartLists: true,
	  smartypants: false,
	  sanitize:false,
	  xhtml: false,
	  highlight: function (code) {
		  return hljs.highlightAuto(code).value;
	  }
      
	}); 
	//---------主要代码-------------start
	const [ mylist , setMylist ] = useState( list.data);
	//---------主要代码-------------end
	return (
	  <>
		<Head>
		  <title>Home</title>
		</Head>
		<Header />
		<Row className="comm-main" type="flex" justify="center">
		  <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
			  <div>
  
				<List
				  header={<div>最新日志</div>}
				  itemLayout="vertical"
				  dataSource={mylist}
				  renderItem={
					item=>(
						<List.Item>
								<div className="list-title">
									<Link href={{pathname:'/detailed',query:{id:item.id}}}>
									<a>{item.title}</a>
									</Link>
								</div>
								<div className="list-icon">
										<span><HomeOutlined />  2019-06-28</span>
										<span><SettingFilled /> 视频教程</span>
										<span><SmileOutlined /> 5498人</span>
								</div>
								<div className="list-context"
									dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
								>
								</div>
						</List.Item>
				)
				}
				/>  
  
			  </div>
		  </Col>
  
		  <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
			<Author />
			<Advert />
		  </Col>
		</Row>
		<Footer/>
  
	 </>
	)
  
  } 
Home.getInitialProps = async ()=>{
	const promise = new Promise((resolve)=>{
		axios(servicePath.getArticleList).then(
		(res)=>{
			//console.log('远程获取数据结果:',res.data.data)
			resolve(res.data)
		}
		)
	})

	return await promise
}
export default Home
