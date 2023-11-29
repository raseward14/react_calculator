import { Outlet } from 'react-router-dom';
import './style.css';

const Layout = () => {
    return (
        <div className='App'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h1>React Calculator</h1>

                        </th>
                    </tr>
                </thead>
                <tbody className='calc-container'>
                    <tr >
                        <th >
                            <div className='calc-wrapper'>
                                text
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <Outlet />
        </div>
    )
}

export default Layout;