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
        return;
      }

      if (digits.includes(input)) {
        if(this.shouldReset === true) {
           this.state.currentDisplay = '';
           this.shouldReset = false;
        }
        this.setState({
          currentDisplay : this.state.currentDisplay + input
        })
      }

      if (operators.includes(input)) {

      if(this.operatorStack.length > 0 && this.precedence(input) <= this.precedence(this.topOperator()) || input == "=") {
        this.operandStack.push(parseFloat(this.state.currentDisplay));
        this.solveStack();
        let result = this.operandStack[0];
        this.setState({
          currentDisplay:`${result}`
        })

        this.operandStack = [];
        this.operatorStack = [];
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


class CalculatorConfig extends React.Component{
    render(){
        return(
       <div>
           <div className="rows">
           <button onClick={() => this.props.inputHandler("0")}>0</button>
           <button onClick={() => this.props.inputHandler("1")}>1</button>
           <button onClick={() => this.props.inputHandler("2")}>2</button>
           </div>
           <div className="rows">
           <button onClick={() => this.props.inputHandler("3")}>3</button>
           <button onClick={() => this.props.inputHandler("4")}>4</button>
           <button onClick={() => this.props.inputHandler("5")}>5</button>
           </div>
           <div className="rows">
           <button onClick={() => this.props.inputHandler("6")}>6</button>
           <button onClick={() => this.props.inputHandler("7")}>7</button>
           <button onClick={() => this.props.inputHandler("8")}>8</button>
           </div>
           <div className="methods">
           <button onClick={() => this.props.inputHandler("9")}>9</button>
           <button onClick={() => this.props.inputHandler("+")} >+</button>
           <button onClick={() => this.props.inputHandler("-")}>-</button>
           </div>
           <div className="methods">
           <button onClick={() => this.props.inputHandler("/")}>/</button>
           <button onClick={() => this.props.inputHandler("*")}>*</button>
           <button onClick={() => this.props.inputHandler("C")}>C</button>

           <button onClick={() => this.props.inputHandler("=")} >Equal</button>
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
