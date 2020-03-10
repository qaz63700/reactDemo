import React, { Component } from 'react';

class Example3 extends Component {
        constructor(props) {
                super(props);
                this.state = { count:0 }
                this.addCount=this.addCount.bind(this)
        }
        componentDidMount(){
                console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
        }
        componentWillUpdate(){
                console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
        }
        render() { 
                return ( 
                        <div>
                           点击 {this.state.count}次
                           <button onClick={this.addCount.bind(this)}>Chlick me</button>
                        </div>
                 );
        }

        addCount(){
                this.setState({count:this.state.count+1})
        }
}
 
export default Example3

