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
                    <Link to='/HK/trace' id='selectdepartment'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/HK/cleaning' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/HK/metal' className="disableCursor" onClick={ (event) => event.preventDefault()}>Metal detector</Link>
                </li>
                <li>
                    <Link to='/HK/cooking' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cooking</Link>
                </li>
                <li>
                    <Link to='/HK/cooling' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cooling</Link>
                </li>
                <li>
                    <Link to='/HK/chiller' className="disableCursor" onClick={ (event) => event.preventDefault()}>Chiller and Freezer</Link>
                </li>
                <li>
                    <Link to='/HK/OPRP' className="disableCursor" onClick={ (event) => event.preventDefault()}>OPRP</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
