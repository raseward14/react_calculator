import { Outlet } from 'react-router-dom';
import './style.css';

const Layout = () => {

    // when numbers are clicked we concat to create a value, display in return
    const createNumber = (value) => {
        console.log(value)
    };

    // this stops when an operator is clicked, then we need to store that value, and operator - go back to number generator function
        // if a prior number exists, execute -> value1, operator, value2 -> display in return state variable

    // when operators are clicked; store value, add operator
    const operatorClicked = () => {

    };

    return (
        <div className='App'>
            <h1>React Calculator</h1>
            <table className='calc-wrapper'>
                <thead className='return'>
                    <tr className='value'>0
                    </tr>
                </thead>
                <tbody className='interface-container'>
                    <tr className='interface'>
                        <tr className='left-container'>
                            <tr className='left-side'>
                                <tr className='left-columns'>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            operatorClicked('AC');
                                        }}>AC</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            createNumber(7);
                                        }}>7</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            createNumber(4);
                                        }}>4</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            createNumber(1);
                                        }}>1</td>
                                    </tr>
                                    <tr className='left-row left-corner'>
                                        <td onClick={() => {
                                            createNumber(0);
                                        }}>0</td>
                                    </tr>
                                </tr>
                                <tr className='left-center-column'>
                                    <tr className='left-center-row'>
                                        <td onClick={() => {
                                            operatorClicked('+');
                                        }}>+/-</td>
                                    </tr>
                                    <tr className='left-center-row'>
                                        <td onClick={() => {
                                            createNumber(8);
                                        }}>8</td>
                                    </tr>
                                    <tr className='left-center-row'>
                                        <td onClick={() => {
                                            createNumber(5);
                                        }}>5</td>
                                    </tr>
                                    <tr className='left-center-row'>
                                        <td onClick={() => {
                                            createNumber(2);
                                        }}>2</td>
                                    </tr>
                                </tr>
                                <tr className='left-columns'>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            operatorClicked('/100');
                                        }}>%</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            createNumber(9);
                                        }}>9</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            createNumber(6);
                                        }}>6</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            createNumber(3);
                                        }}>3</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td onClick={() => {
                                            createNumber('.');
                                        }}>.</td>
                                    </tr>
                                </tr>
                            </tr>
                        </tr>
                        <tr className='right-side'>
                            <tr className='right-row big'>
                                <td onClick={() => {
                                    operatorClicked('/');
                                }}>÷</td>
                            </tr>
                            <tr className='right-row big'>
                                <td onClick={() => {
                                    operatorClicked('x');
                                }}>x</td>
                            </tr>
                            <tr className='right-row big'>
                                <td onClick={() => {
                                    operatorClicked('-');
                                }}>-</td>
                            </tr>
                            <tr className='right-row big'>
                                <td onClick={() => {
                                    operatorClicked('+');
                                }}>+</td>
                            </tr>
                            <tr className='right-row right-corner bold'>
                                <td onClick={() => {
                                    operatorClicked('=');
                                }}>=</td>
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