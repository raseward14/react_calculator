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
                    <tbody className='interface'>
                        <tr >
                            <th>text
                            </th>
                        </tr>
                    </tbody>
                </table>
            <Outlet />
        </div>
    )
}

export default Layout;