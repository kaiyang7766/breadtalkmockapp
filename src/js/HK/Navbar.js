import React from 'react';
import {Link} from 'react-router-dom';

export default function HKNavbar() {
    return (
        <>
        <div className='container'>
            <h3> Hot Kitchen 厨房</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/HK/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/HK/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/HK/metal'>Metal detector</Link>
                </li>
                <li>
                    <Link to='/HK/cooking'>Cooking</Link>
                </li>
                <li>
                    <Link to='/HK/cooling'>Cooling</Link>
                </li>
                <li>
                    <Link to='/HK/chiller'>Chiller and Freezer</Link>
                </li>
                <li>
                    <Link to='/HK/OPRP'>OPRP</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
