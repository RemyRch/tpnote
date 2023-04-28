import { useContext, useReducer, useState } from "react";
import Buttons from "./Buttons";
import { NumberContext } from "../Context/NumberContext";

function reducer(state, action) {
    
    switch (action.type) {
        case "result":

            action.inputs.setResult(true)

            if (state.operator === null) return;
            let result = "Error";
            let calcul = `${action.inputs.tempNumber} ${action.inputs.inputNumber}`

            calcul = calcul.replaceAll(' ', '')
            if( ["*", "/", "-", "+"].includes(calcul[0])) calcul = calcul.slice(1);

            if(!calcul.includes('/ 0') && !calcul.includes('Error')) result = eval(calcul);
            action.inputs.setInputNumber(result);
            action.inputs.setTempNumber("");
            break;
        case "reset":
            action.inputs.setInputNumber(0);
            action.inputs.setTempNumber("");
            break;
        case ".": 
            if (action.inputs.inputNumber.includes(".")) break;
            action.inputs.setInputNumber(`${action.inputs.inputNumber}.`);
            break;
        default:
            if (action.inputs.result) action.inputs.setResult(false);
            if (action.inputs.inputNumber === "Error") break;
            if(action.inputs.tempNumber === "") action.inputs.setTempNumber(`${action.inputs.inputNumber} ${action.operator}`);
            else action.inputs.setTempNumber(`${action.inputs.tempNumber} ${action.inputs.inputNumber} ${action.operator} `);
            action.inputs.setInputNumber(0);
            break;
    }

    return {... state, operator: action.operator};
}

function Calculator() {

    const { inputNumber, setInputNumber, tempNumber, setTempNumber, result, setResult } = useContext(NumberContext);
    const inputs = { inputNumber, setInputNumber, tempNumber, setTempNumber, result, setResult }
    
    const [state, dispatch] = useReducer(reducer, { operator: null });

    return (
        <section className="calculator">
            <div className="calculatorContainer">
                <div className="calculatorHeader">
                    <p htmlFor="" style={{ textAlign: "end" }}>{tempNumber}</p>
                    <input type="text" className="calculatorInput" readOnly placeholder="0" value={inputNumber} />
                </div>
                <div className="calculatorActions">
                    <button className="calculatorButton buttonAction" onClick={() => { dispatch({ type: "add", operator: "+", inputs }) } }>+</button>
                    <button className="calculatorButton buttonAction" onClick={() => { dispatch({ type: "remove", operator: "-", inputs }) } }>-</button>
                    <button className="calculatorButton buttonAction" onClick={() => { dispatch({ type: "multiply", operator: "*", inputs }) } }>x</button>
                    <button className="calculatorButton buttonAction" onClick={() => { dispatch({ type: "divide", operator: "/", inputs }) } }>/</button>
                    <button className="calculatorButton buttonAction" onClick={() => { dispatch({ type: ".", operator: ",", inputs }) } }>.</button>
                </div>
                <div className="calculatorBody">
                    <div className="buttonsContainer">
                        <Buttons />
                        <button className="numberButtons buttonAction" onClick={() => { dispatch({ type: "result", operator: "=", inputs }) } }>=</button>
                        <button className="numberButtons buttonAction" onClick={() => { dispatch({ type: "reset", operator: "C", inputs }) } }>C</button>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Calculator;