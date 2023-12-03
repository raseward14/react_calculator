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
                                <th className='left-columns'>1</th>
                                <th className='left-columns'>2</th>
                                <th className='left-columns'>3</th>
                            </tr>
                            {/* <tr>                                     <td className=''>1</td>
                                <td className=''>2</td>
                                <td className=''>3</td>
                            </tr>
                            <tr>                                     <td className=''>1</td>
                                <td className=''>2</td>
                                <td className=''>3</td>
                            </tr>
                            <tr>                                     <td className=''>1</td>
                                <td className=''>2</td>
                                <td className=''>3</td>
                            </tr>
                            <tr>                                     <td className=''>1</td>
                                <td className=''>2</td>
                                <td className=''>3</td>
                            </tr>
                            <tr>                                     <td className=''>1</td>
                                <td className=''>2</td>
                                <td className=''>3</td>
                            </tr> */}
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