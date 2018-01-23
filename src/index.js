import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var approot=document.getElementById('appid');//CONNECT IT FIRST
console.log("app is running now");
class Calculatetop extends React.Component{
    constructor(props){
        super(props);

        this.state = this.initialState();
        this.operatorStack = [];
        this.operandStack = [];
        this.shouldReset = false;
    }

    initialState() {
      return {
          currentDisplay:'',
        };
    }

    reset() {
      this.setState(()=> this.initialState());
      this.operatorStack = [];
      this.operandStack = [];
    }

    handleInput(input) {

      let digits = ["0","1","2","3","4","5","6","7","8","9","."];
      let operators = ["+","-","*","/","="];

      if (input === "C") {
        this.reset();
      }

      else if (digits.includes(input)) {
        if(this.shouldReset === true) {
           this.state.currentDisplay = '';
           this.shouldReset = false;
        }
        this.setState({
          currentDisplay : this.state.currentDisplay + input
        });
        return;
      }

      else if (operators.includes(input)) {

      if(this.operatorStack.length > 0 && this.precedence(input) <= this.precedence(this.topOperator()) || input == "=") {

      try {
        this.operandStack.push(parseFloat(this.state.currentDisplay));
        this.solveStack();
        let result = this.operandStack[0];
        this.setState({
          currentDisplay:`${result}`
        });
        this.operandStack = [result];
        this.operatorStack = [];

      }

      catch (error) {
        this.setState({
          currentDisplay:`Error`
        });
        this.operandStack = [];
        this.operatorStack = [];
        this.shouldReset = true;

      }


      } else {
         this.operandStack.push(parseFloat(this.state.currentDisplay));
      }


        if (input !== '=') {
          this.operatorStack.push(input);
          this.shouldReset = true;
        }

      }

    }

    topOperator() {
      return this.operatorStack[this.operatorStack.length - 1];
    }

    solveStack() {
      while(this.operatorStack.length > 0) {
        let operator = this.operatorStack.pop();
        let operandTwo = this.operandStack.pop();
        let operandOne = this.operandStack.pop();
        this.operandStack.push(this.performOperation(operandOne,operandTwo,operator));
      }
    }

    precedence(operator) {
      return {
        '+' : 1 , '-' : 1 , '*' : 2 , '/' : 2
      }[operator];
    }

    performOperation(first,second,operator) {
      if (operator === "+") {
        return first + second;
      }
      else if (operator === "-") {
        return first - second;
      }
      else if (operator === "*") {
        return first * second;
      }
      else if (operator === "/") {
        if(second == 0) {
          throw 'Divide by zero';
        }
        return first / second;
      }
    }

    render()
    {
        return(
         <div>
             <h1>CalculatorApp</h1>
             <CalculatorDisplay
             currentDisplay={this.state.currentDisplay}
             ></CalculatorDisplay>
             <CalculatorConfig inputHandler={(input) => this.handleInput(input)}></CalculatorConfig>
             </div>

        );
    }
}

class CalculatorDisplay extends React.Component{

    render(){
        return(
        <div>
            <p>{this.props.currentDisplay === '' ? '0' : this.props.currentDisplay}</p>
            </div>
        );
    }
}

let ButtonComponent = (text,handler) => {
  return <button onClick ={ () => handler(text)}> { text} </button>
};

class CalculatorConfig extends React.Component{
    render(){
        return(
       <div>
           <div className="rows">
           { ["0","1","2"].map((element) => ButtonComponent(element,this.props.inputHandler))}
           </div>
           <div className="rows">
             { ["3","4","5"].map((element) => ButtonComponent(element,this.props.inputHandler))}
           </div>
           <div className="rows">
             { ["6","7","8"].map((element) => ButtonComponent(element,this.props.inputHandler))}
           </div>
           <div className="methods">
             { ["9","+","-"].map((element) => ButtonComponent(element,this.props.inputHandler))}
           </div>
           <div className="methods">
             { ["/","*","C","="].map((element) => ButtonComponent(element,this.props.inputHandler))}
           </div>
     </div>
        );
    }

}
const jsx =(
    <div>
        <Calculatetop/>
    </div>
);
ReactDOM.render(jsx,approot);
