import React from 'react';
import {Link} from 'react-router-dom';

export default function CakeNavbar() {
    return (
        <>
        <div className='container'>
            <h3> Cake department 蛋糕部</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/cake/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/cake/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/cake/metal'>Metal detector</Link>
                </li>
                <li>
                    <Link to='/cake/cooking'>Cooking</Link>
                </li>
                <li>
                    <Link to='/cake/chiller'>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
