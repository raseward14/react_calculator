import { Outlet } from 'react-router-dom';
import './style.css';

const Layout = () => {


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
                        <th className='left'>
                            <tr className='c-container'>
                                <th className='left-columns'>
                                    <tr className='left-row'>AC</tr>
                                    <tr className='left-row'>7</tr>
                                    <tr className='left-row'>4</tr>
                                    <tr className='left-row'>1</tr>
                                    <tr className='left-row left-corner'>5</tr>
                                </th>
                                <th className='left-columns'>
                                    <tr className='left-row'>+/-</tr>
                                    <tr className='left-row'>8</tr>
                                    <tr className='left-row'>5</tr>
                                    <tr className='left-row'>2</tr>
                                    <tr className='left-row'>2</tr>
                                </th>
                                <th className='left-columns'>
                                    <tr className='left-row'>%</tr>
                                    <tr className='left-row'>9</tr>
                                    <tr className='left-row'>6</tr>
                                    <tr className='left-row'>3</tr>
                                    <tr className='left-row'>.</tr>
                                </th>
                            </tr>
                        </th>
                        <th className='right'>
                        <tr className='right-row bold'>÷</tr>
                            <tr className='right-row bold'>x</tr>
                            <tr className='right-row bold'>-</tr>
                            <tr className='right-row bold'>+</tr>
                            <tr className='right-row right-corner bold'>=</tr>
                        </th>
                    </tr>
                </tbody>
            </table>
            <Outlet />
        </div>
    )
}

export default Layout;