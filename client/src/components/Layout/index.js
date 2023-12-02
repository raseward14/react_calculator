import { Outlet } from 'react-router-dom';
import './style.css';

const Layout = () => {


    return (
        <div  className='App'>
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
                                <th className='c1'>1</th>
                                <th className='c2'>2</th>
                                <th className='c3'>3</th>
                            </tr>
                            <tr></tr>
                            </th>
                            <th className='right'>right
                            </th>
                        </tr>
                    </tbody>
                </table>
            <Outlet />
        </div>
    )
}

export default Layout;