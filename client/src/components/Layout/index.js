import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './style.css';

const Layout = () => {

    const [display, setDisplay] = useState(0);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [operator, setOperator] = useState(null);
    const [clear, setClear] = useState("AC");

    // when numbers are clicked we concat to create a value, display in return
    const createNumber = (value) => {
        // first click - set value1 to the clicked value
        if ((value1 === "") && (operator === null)) {
            let newValue = "" + value;
            setValue1(newValue);
            setDisplay(newValue);
            setClear("C");
        // keep concating on value1 until an operator is clicked
        } else if((value1 !== "") && (operator === null)) {
            let newValue = "" + value1 + value;
            setValue1(newValue);
            setDisplay(newValue);
            setClear("C");
        // if an operator exists, neither condition above will be met, and we build value2
        } else if((value2 === "") && (operator !== null || "cleared")) {
            let secondValue = "" + value;
            setValue2(secondValue);
            setDisplay(secondValue);
            setClear("C");
        } else {
            let secondValue = "" + value2 + value;
            setValue2(secondValue);
            setDisplay(secondValue);
            setClear("C");
        }
    };

    // this stops when an operator is clicked, then we need to store that value, and operator - go back to number generator function
    // if a prior number exists, execute -> value1, operator, value2 -> display in return state variable

    // when operators are clicked; store value, add operator
    const operatorClicked = (value) => {
        if ((operator === null) || (operator === "cleared")) { 
            setOperator(value);
            console.log(`operator is ${value}`)
        } else {
            switch (operator) {
                case "÷":
                    {
                        console.log('performed division')
                        const divide = () => {
                            let newDisplay = JSON.parse(value1) / JSON.parse(value2);
                            setDisplay(newDisplay);
                            setValue1(newDisplay);
                            setValue2("");
                            setOperator(null);
                        };
                        divide();
                    }
                    break;
                case "x":
                    {
                        console.log('performed multiplication')

                        const multiply = () => {
                            let newDisplay = JSON.parse(value1) * JSON.parse(value2);
                            setDisplay(newDisplay);
                            setValue1(newDisplay);
                            setValue2("");
                            setOperator(null);
                        };
                        multiply();
                    }
                    break;
                case "-":
                    {
                        console.log('performed subtraction')
                        const subtract = () => {
                            let newDisplay = JSON.parse(value1) - JSON.parse(value2);
                            setDisplay(newDisplay);
                            setValue1(newDisplay);
                            setValue2("");
                            setOperator(null);
                        };
                        subtract();
                    }
                    break;
                case "+":
                    {
                        console.log('performed addition')
                        const add = () => {
                            console.log('made it here');
                            let newDisplay = JSON.parse(value1) + JSON.parse(value2);
                            setDisplay(newDisplay);
                            setValue1(newDisplay);
                            setValue2("");
                            setOperator(null);
                        };
                        add();
                    };
                    break;
                default:
                    const equal = () => {
                        setValue1(value2);
                        setValue2("");
                        setOperator(null);

                    };
                    break;
            }
        }
    };

    // when percent is clicked, change the value, move decimal place twice to the left
    const makePercent= (value) => {
        let newValue = value/100;
        if(operator) {
            setValue2(newValue);
            setDisplay(newValue);
        } else {
            setValue1(newValue);
            setDisplay(newValue);
        };
    };

    // when +/- is clicked, change from positive to negative, and from negative to positive
    const positiveNegative = (value) => {
        let newValue = value *= -1;
        if(operator) {
            setValue2(newValue);
            setDisplay(newValue);
        } else {
            setValue1(newValue);
            setDisplay(newValue);
        };
    };

    // when C is clicked, clear all values, and operators
    const clearValues = () => {
        if(value1 !== "" && ((operator === null) || (operator === "cleared")) && (value2 === "")) {
            setValue1("");
            setDisplay(0);
            setClear("AC");
            console.log('clear value1 only')
            console.log(operator)
        } else if((value1 !== "") && (operator !== null) && (value2 === "")) {
            setOperator("cleared")
            setClear("AC");
            console.log('clear operator only')
        } else if((value1 !== "") && (operator !== null) && (value2 !== "")) {
            setValue2("")
            setDisplay(0);
            setClear("AC");
            console.log('clear value2 only')
        } else {
            setValue1("");
            setValue2("");
            setOperator(null)
            setDisplay(0);
            setClear("AC");
            console.log('clear everything')

        }
    };

    // every time value1 changes, log it
    useEffect(() => {
        console.log(`value1: ${value1}`)
    }, [value1]);

    // every time value2 changes, log it
    useEffect(() => {
        console.log(`value2: ${value2}`)
    }, [value2]);

    // every time operator changes, log it
    useEffect(() => {
        console.log(`operator: ${operator}`)
    }, [operator]);

    return (
        <div className='App'>
            <h1>React Calculator</h1>
            <table className='calc-wrapper'>
                <thead className='return'>
                    <tr className='value'>{display}
                    </tr>
                </thead>
                <tbody className='interface-container'>
                    <tr className='interface'>
                        <tr className='left-container'>
                            <tr className='left-side'>
                                <tr className='left-columns'>
                                    <tr className='left-row darker'
                                        onClick={() => {
                                            clearValues();
                                        }}>
                                        <td>{clear}</td>
                                    </tr>
                                    <tr className='left-row'
                                        onClick={() => {
                                            createNumber(7);
                                        }}>
                                        <td>7</td>
                                    </tr>
                                    <tr className='left-row'
                                        onClick={() => {
                                            createNumber(4);
                                        }}>
                                        <td>4</td>
                                    </tr>
                                    <tr className='left-row'
                                        onClick={() => {
                                            createNumber(1);
                                        }}>
                                        <td>1</td>
                                    </tr>
                                    <tr className='left-row left-corner'
                                        onClick={() => {
                                            createNumber(0);
                                        }}>
                                        <td>0</td>
                                    </tr>
                                </tr>
                                <tr className='left-center-column'>
                                    <tr className='left-center-row darker'
                                        onClick={() => {
                                            positiveNegative(display);
                                        }}>
                                        <td>+/-</td>
                                    </tr>
                                    <tr className='left-center-row'
                                        onClick={() => {
                                            createNumber(8);
                                        }}>
                                        <td>8</td>
                                    </tr>
                                    <tr className='left-center-row'
                                        onClick={() => {
                                            createNumber(5);
                                        }}>
                                        <td>5</td>
                                    </tr>
                                    <tr className='left-center-row'
                                        onClick={() => {
                                            createNumber(2);
                                        }}>
                                        <td>2</td>
                                    </tr>
                                </tr>
                                <tr className='left-columns'>
                                    <tr className='left-row darker'
                                        onClick={() => {
                                            makePercent(display);
                                        }}>
                                        <td>%</td>
                                    </tr>
                                    <tr className='left-row'
                                        onClick={() => {
                                            createNumber(9);
                                        }}>
                                        <td>9</td>
                                    </tr>
                                    <tr className='left-row'
                                        onClick={() => {
                                            createNumber(6);
                                        }}>
                                        <td>6</td>
                                    </tr>
                                    <tr className='left-row'
                                        onClick={() => {
                                            createNumber(3);
                                        }}>
                                        <td>3</td>
                                    </tr>
                                    <tr className='left-row'
                                        onClick={() => {
                                            createNumber('.');
                                        }}>
                                        <td>.</td>
                                    </tr>
                                </tr>
                            </tr>
                        </tr>
                        <tr className='right-side'>
                            <tr className='right-row big'
                                onClick={() => {
                                    operatorClicked('/');
                                }}>
                                <td>÷</td>
                            </tr>
                            <tr className='right-row big'
                                onClick={() => {
                                    operatorClicked('x');
                                }}>
                                <td>x</td>
                            </tr>
                            <tr className='right-row big'
                                onClick={() => {
                                    operatorClicked('-');
                                }}>
                                <td>-</td>
                            </tr>
                            <tr className='right-row big'
                                onClick={() => {
                                    operatorClicked('+');
                                }}>
                                <td>+</td>
                            </tr>
                            <tr className='right-row right-corner bold'
                                onClick={() => {
                                    operatorClicked('=');
                                }}>
                                <td>=</td>
                            </tr>
                        </tr>
                    </tr>
                </tbody>
            </table>
            <Outlet />
        </div>
    )
}

export default Layout;