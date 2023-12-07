import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import './style.css';

const Layout = () => {

    const [display, setDisplay] = useState(0);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [operator, setOperator] = useState(null);
    const [clear, setClear] = useState("AC");

    // when numbers are clicked we concat to create a value, display in return
    const createNumber = (value) => {
        if (value1 === "") {
            let newValue = "" + value1 + value;
            setValue1(newValue);
            setDisplay(newValue);
            setClear("C");
        } else {
            let secondValue = "" + value2 + value;
            setValue2(secondValue);
            setDisplay(secondValue);
        }
    };

    // this stops when an operator is clicked, then we need to store that value, and operator - go back to number generator function
    // if a prior number exists, execute -> value1, operator, value2 -> display in return state variable

    // when operators are clicked; store value, add operator
    const operatorClicked = (value) => {
        if (operator === null) {
            setOperator(value);
            console.log(value);
        } else {
            switch (operator) {
                case "÷":
                    {

                    }
                    const divide = () => {
                        let newDisplay = value1 / value2;
                        setDisplay(newDisplay);
                    };
                    break;
                case "x":
                    const multiply = () => {
                        let newDisplay = value1 * value2;
                        setDisplay(newDisplay);

                    };
                    break;
                case "-":
                    const subtract = () => {
                        let newDisplay = value1 - value2;
                        setDisplay(newDisplay);
                    };
                    break;
                case "+":
                    {
                        const add = () => {
                            console.log('made it here');
                            let newDisplay = JSON.parse(value1) + JSON.parse(value2);
                            setDisplay(newDisplay);
                        };
                        add();
                    };
                    break;
                default:
                    const equal = () => {
                        setValue1(value2);
                    };
                    break;
            }
        }
    };

    // when percent is clicked, change the value, move decimal place twice to the left

    // when +/- is clicked, change from positive to negative, and from negative to positive

    // when a value exists, AC changes to C

    // when C is clicked, clear all values, and operators
    const clearValues = (value) => {
        if(value === "C") {
            setClear("AC");
            setValue1("");
            setDisplay(0);
        }
    }

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
                                    <tr className='left-row'
                                        onClick={() => {
                                            clearValues('C');
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
                                    <tr className='left-center-row'
                                        onClick={() => {
                                            operatorClicked('+');
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
                                    <tr className='left-row'
                                        onClick={() => {
                                            operatorClicked('/100');
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