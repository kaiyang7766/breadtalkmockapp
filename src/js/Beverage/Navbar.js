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
                    <Link to='/beverage/trace' id='selectdepartment'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/beverage/cleaning' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/beverage/cooking' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cooking</Link>
                </li>
                <li>
                    <Link to='/beverage/chiller' className="disableCursor" onClick={ (event) => event.preventDefault()}>Chiller and Freezer</Link>
                </li>
                <li>
                    <Link to='/beverage/OPRP' className="disableCursor" onClick={ (event) => event.preventDefault()}>OPRP</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
