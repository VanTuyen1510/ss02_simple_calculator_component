import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: {
        firtNumber: 0,
        secondNumber: 0,
        result: 0,
      },
    };
  }

  changeText = (properties, value) => {
    this.setState((pre) => {
      return {
        calculator: {
          ...pre.calculator,
          [properties]: parseInt(value),
        },
      };
    });
  };

  showResult = (expression) => {
    switch (expression) {
      case "+":
        console.log(this.state.calculator.firtNumber);
        console.log(this.state.calculator.secondNumber);
        this.setState((prev) => {
    
          return {
              calculator: {
                ...prev.calculator,
                result: prev.calculator.firtNumber + prev.calculator.secondNumber
              }
          }
        });
        
        break;
      case "-":
        this.setState((prev) => {
          return {
              calculator: {
                ...prev.calculator,
                result: prev.calculator.firtNumber - prev.calculator.secondNumber
              },
          }
        });
        break;
      case "*":
        this.setState((prev) => {
          return {
              calculator: {
                ...prev.calculator,
                result: (prev.firtNumber * prev.secondNumber)
              },
          }
        });
        break;
      case "/":
        this.setState((prev) => {
          return {
              calculator: {
                ...prev.calculator,
                result: (prev.firtNumber / prev.secondNumber)
              },
          }
        });
        break;
    }
  };

  render() {
    return (
      <>
        <form>
          <input type="number"
            onChange={(evt) => this.changeText("firtNumber", evt.target.value)}
          /> <br/>
          <input 
            onChange={(evt) => this.changeText("secondNumber", evt.target.value)}
          />
          <br/>
          <p>Result :</p>
          <button
            type="button"
            value="+"
            onClick={(evt) => this.showResult("+", evt.target.value)}
          >
            +
          </button>
          <button
            type="button"
            value="-"
            onClick={(evt) => this.showResult("-", evt.target.value)}
          >
            -
          </button>
          <button
            type="button"
            value="*"
            onClick={(evt) => this.showResult("*", evt.target.value)}
          >
            *
          </button>
          <button
            type="button"
            value="/"
            onClick={(evt) => this.showResult("/", evt.target.value)}
          >
            /
          </button>
        
        </form>
        <h1 className="p-3 text-bg-success border border-primary-subtle rounded-3">
            {this.state.calculator.result}
          </h1>
      </>
    );
  }
}
export default Calculator;
