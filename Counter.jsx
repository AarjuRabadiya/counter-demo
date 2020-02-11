import React from 'react';
import './Counter.css';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:0
    };
    
  }
  reset=()=>{
    this.setState({
      value:0
    });
  }
  increments=()=>{
    //console.log("hii");
    this.setState({
      value:this.state.value+1
    });
  
  }
  decremetns=()=>{
    //console.log("hii");
    if(this.state.value===0){
      this.setState({
        value:0
      });
    }else{
      this.setState({
        value:this.state.value-1
      });
    }
    
  }  

render(){
    return (
    
        <div className="ad">
          <div className="design">
           <span>     <a href="#" className="Leftside" onClick={this.increments}>+</a></span>
                <input type="text" className="addval" value={this.state.value} readOnly/>
                <a href="#" className="Rightside" disabled={this.state.value<= 0} onClick={this.decremetns}>-</a>        
        </div>
        <div className="reset"><button onClick={this.reset}>Reset</button></div>
        </div>
      )
  }
}
  export default Counter;