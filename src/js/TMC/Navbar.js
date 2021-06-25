import React from 'react';
import {Link} from 'react-router-dom';

export default function TMCNavbar() {
    return (
        <>
        <div className='container'>
            <h3> TMC department 泰茂栈</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/TMC/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/TMC/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/TMC/metal'>Metal detector</Link>
                </li>
                <li>
                    <Link to='/TMC/cooking'>Cooking</Link>
                </li>
                <li>
                    <Link to='/TMC/chiller'>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
