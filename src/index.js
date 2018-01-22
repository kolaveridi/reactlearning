import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var approot=document.getElementById('appid');//CONNECT IT FIRST
console.log("app is running now");
class Calculatetop extends React.Component{
    constructor(props){
        super(props);
        this.addzero=this.addzero.bind(this); this.addone=this.addone.bind(this);this.addtwo=this.addtwo.bind(this);
        this.addthree=this.addthree.bind(this);this.addfour=this.addfour.bind(this);this.addfive=this.addfive.bind(this);
        this.addsix=this.addsix.bind(this);this.addseven=this.addseven.bind(this);this.addeight=this.addeight.bind(this);
        this.addnine=this.addnine.bind(this);this.plus=this.plus.bind(this);this.subtract=this.subtract.bind(this);
        this.multiply=this.multiply.bind(this);this.divide=this.divide.bind(this);this.clearall=this.clearall.bind(this);
        this.state = {
            result:0,
            number:0,
            numberformed:0,
            finalstring:''
        };

    };
    addzero(){
        console.log("zero is clicked");
        this.setState(()=>{
            return{
            
              numberformed:this.state.numberformed*10+0,
             
            
            };
        });
    }
    addone(){
        console.log("addone is clicked");
        this.setState(()=>{
            return{
            
              numberformed:this.state.numberformed*10+1,
              
            
            };
        });
    }
    addtwo(){
        console.log("two is clicked");
        this.setState(()=>{
            return{
            
              numberformed: this.state.numberformed*10+2,
             
            
            };
        });

    }
    addthree(){
        console.log("three is clicked");
        this.setState(()=>{
            return{
            
              numberformed: this.state.numberformed*10+3,
            
            };
        });

    }
    addfour(){
        console.log("four is clicked");
        this.setState(()=>{
            return{
              numberformed: this.state.numberformed*10+4,
            };
        });

    }
    addfive(){
        console.log('five is clicked');
        this.setState(()=>{
            return{
              numberformed: this.state.numberformed*10+5,    
            };
        });
    }
    addsix(){
        console.log('six is clicked');
        this.setState(()=>{
            return{
            
              numberformed: this.state.numberformed*10+6,
              
            
            };
        });
    }
    addseven(){
        console.log('seven is clicked');
        this.setState(()=>{
            return{
            
              numberformed: this.state.numberformed*10+7,
              
            
            };
        });
    }
    addeight(){
        console.log('eight is clicked');
        this.setState(()=>{
            return{
        
              numberformed: this.state.numberformed*10+8,
             
            
            };
        });
    }
    addnine(){
        console.log('nine is clicked');
        this.setState(()=>{
            return{
        
              numberformed: this.state.numberformed*10+8,
             
            
            };
        });

    }
   plus(){
    console.log('plus is clicked');
    this.setState(()=>{
        return{
    
            
          
            result:this.state.numberformed+this.state.result,
            

        
        };
        console.log("value of result is now");
    });

   }
   subtract(){
    console.log('subtract is clicked');
    this.setState(()=>{
        return{
    
        
          result:this.state.result-this.state.numberformed,

        
        };
    });
   }
   multiply(){

    console.log('multiply is clicked');
    this.setState(()=>{
        return{
    
        
          result:this.state.result*this.state.numberformed,
        
        };
    });
   }
   divide(){
    console.log('divide is clicked');
    this.setState(()=>{
        return{
    
        
          result:this.state.result/this.state.numberformed,
        
        };
    });

   }
   clearall(){
    console.log('clearall is clicked');
    this.setState(()=>{
        return{
    
        
          result:0,
          numberformed:0
        
        };
    });



   

   }

    
    
    render() 
    {
        return(
         <div>
             <h1>CalculatorApp</h1>
             <Calculatordisplay resultis={this.state.numberformed}></Calculatordisplay>
             <Calculatorconfig
              addzero={this.addzero} addone={this.addone}  addtwo={this.addtwo}
              addthree={this.addthree} addfour={this.addfour} addfive={this.addfive}
              addsix={this.addsix} addseven={this.addseven} addeight={this.addeight}
              addnine={this.nine} plus={this.plus} subtract={this.subtract} multiply={this.multiply}
              divide ={this.divide} clearall={this.clearall}
              ></Calculatorconfig>
             </div>

        );
    }
}

class Calculatordisplay extends React.Component{
    constructor(props){
        super(props);   
    }
    
    
    render(){
        console.log(this.props.resultis);
        return(
           
        <div>
            
            <p>{this.props.resultis}</p>
            
            </div>
        );
    }
}


class Calculatorconfig extends React.Component{
    render(){
        return(
       <div>
           <div className="rows">
           <button onClick={this.props.addzero}>0</button>
           <button onClick={this.props.addone}>1</button>
           <button onClick={this.props.addtwo}>2</button>
           </div>
           <div className="rows">
           <button onClick={this.props.addthree}>3</button>
           <button onClick={this.props.addfour}>4</button>
           <button onClick={this.props.addfive}>5</button>
           </div>
           <div className="rows">
           <button onClick={this.props.addsix}>6</button>
           <button onClick={this.props.addseven}>7</button>
           <button onClick={this.props.addeight}>8</button>
           </div>
           <div className="methods">
           <button onClick={this.props.addnine}>9</button>
           <button onClick={this.props.plus} >+</button>
           <button onClick={this.props.subtract}>-</button>
           </div>
           <div className="methods">
           <button onClick={this.props.divide}>/</button>
           <button onClick={this.props.multiply}>*</button>
           <button onClick={this.props.clearall}>C</button>
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