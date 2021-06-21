import React from 'react';
import {Link} from 'react-router-dom';

export default function BeverageNavbar() {
    return (
        <>
        <div className='container'>
            <h3> Beverage department 饮料部</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/beverage/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/beverage/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/beverage/cooking'>Cooking</Link>
                </li>
                <li>
                    <Link to='/beverage/chiller'>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
