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
                        <th className='left-container'>
                            <tr className='left-side'>
                                <th className='left-columns'>
                                    <tr className='left-row'>
                                        <td>AC</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td>7</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td>4</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td>1</td>
                                    </tr>
                                    <tr className='left-row left-corner'>
                                        <td>0</td>
                                    </tr>
                                </th>
                                <th className='left-center-column'>
                                    <tr className='left-center-row'>
                                        <td>+/-</td>
                                    </tr>
                                    <tr className='left-center-row'>
                                        <td>8</td>
                                    </tr>
                                    <tr className='left-center-row'>
                                        <td>5</td>
                                    </tr>
                                    <tr className='left-center-row'>
                                        <td>2</td>
                                    </tr>
                                </th>
                                <th className='left-columns'>
                                    <tr className='left-row'>
                                        <td>%</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td>9</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td>6</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td>3</td>
                                    </tr>
                                    <tr className='left-row'>
                                        <td>.</td>
                                    </tr>

                                </th>
                            </tr>
                        </th>
                        <th className='right-side'>
                            <tr className='right-row big'>
                                <td>÷</td>
                            </tr>
                            <tr className='right-row big'>
                                <td>x</td>
                            </tr>
                            <tr className='right-row big'>
                                <td>-</td>
                            </tr>
                            <tr className='right-row big'>
                                <td>+</td>
                            </tr>
                            <tr className='right-row right-corner bold'>
                                <td>=</td>
                            </tr>
                        </th>
                    </tr>
                </tbody>
            </table>
            <Outlet />
        </div>
    )
}

export default Layout;