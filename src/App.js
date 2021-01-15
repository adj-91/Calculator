import {evaluate} from "math.js"
import React from "react";
import './App.css';


class App extends React.Component {

  state = {
    count: "0",
    secCount: "0",
    expression: ""
  }
 
  value = (num) => {
  
    this.setState({count: num}); //sets count to num inputted


    if (this.state.count !== "0") {
      let num1 = this.state.count;
      let newNum = num1+num;

      this.setState({count: newNum})


    }
  }

  operator = (op) => {
    let num1 = this.state.count;
    let num3 = this.state.expression;
    this.setState({secCount: num1});
    this.setState({count: "0"});

    if (op === "*") {
      this.setState({expression: num3+num1 + "*"})
    
    }
    else if (op === "+") {
      this.setState({expression: num3+num1+"+"})
    }
    else if (op === "-") {
      this.setState({expression: num3+num1+"-"})
    }
    else if (op === "/") {
      this.setState({expression: num3+num1+"/"})
    }

  }

  equal = () => {
    let num1 = this.state.count;
    let expression = this.state.expression+num1;
  
    let answer = expression;
    
    console.log(answer);
    console.log(eval(answer));
    
    //eval and math.js don't work!

  this.setState({count: eval(answer)});

  }

  clear = () => {
    this.setState({count: "0"});
    this.setState({secCount: "0"});
    this.setState({expression: ""});
  }

  render() {

  return (

    <div className="body">

      <div className="output">
        <p id="display">{this.state.count}</p>
      </div>

      <div className="row">
      <ValueButton id="numBtn" buttonFunction={()=>this.value("9")} buttonType="9" />
      <ValueButton id="numBtn" buttonFunction={()=>this.value("8")} buttonType="8" />
      <ValueButton id="numBtn" buttonFunction={()=>this.value("7")} buttonType="7" />
      <ValueButton id="operatorBtn"buttonFunction={()=>this.operator("*")} buttonType="x"/>
      </div>

      <div className="row">
      <ValueButton id="numBtn" buttonFunction={()=>this.value("6")} buttonType="6"/>
      <ValueButton id="numBtn" buttonFunction={()=>this.value("5")} buttonType="5"/>
      <ValueButton id="numBtn" buttonFunction={()=>this.value("4")} buttonType="4"/>
      <ValueButton id="operatorBtn"buttonFunction={()=>this.operator("-")} buttonType="-"/>
      </div>

      <div className="row">
      <ValueButton id="numBtn" buttonFunction={()=>this.value("3")} buttonType="3"/>
      <ValueButton id="numBtn" buttonFunction={()=>this.value("2")} buttonType="2"/>
      <ValueButton id="numBtn" buttonFunction={()=>this.value("1")} buttonType="1"/>
      <ValueButton id="operatorBtn"buttonFunction={()=>this.operator("+")} buttonType="+"/>
      </div>

      <div className="row">
      <ValueButton id="operatorBtn"buttonFunction={this.clear} buttonType="C"/>
      <ValueButton id="operatorBtn"buttonFunction={()=>this.value("0")} buttonType="0"/>
      <ValueButton id="operatorBtn"buttonFunction={this.equal} buttonType="="/>
      <ValueButton id="operatorBtn"buttonFunction={()=>this.operator("/")} buttonType="÷"/>
      </div>

    </div>

  );
}
}


const ValueButton = (props) => {

  return(
  <div>
    <button id="button" onClick={props.buttonFunction}>{props.buttonType}</button>
  </div>
  )

}


export default App;
