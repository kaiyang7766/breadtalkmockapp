import React from 'react';
import {Link} from 'react-router-dom';

export default function AMNavbar() {
    return (
        <>
        <div className='container'>
            <h3> A-Mix department</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/AM/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/AM/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/AM/OPRP'>OPRP</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
