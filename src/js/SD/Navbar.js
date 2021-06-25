import React from 'react';
import {Link} from 'react-router-dom';

export default function SdNavbar() {
    return (
        <>
        <div className='container'>
            <h3> Shaped dough department 整型部</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/SD/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/SD/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/SD/metal'>Metal detector</Link>
                </li>
                <li>
                    <Link to='/SD/chiller'>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
