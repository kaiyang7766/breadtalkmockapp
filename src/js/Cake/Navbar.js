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
                    <Link to='/cake/trace' id='selectdepartment'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/cake/cleaning' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/cake/metal' className="disableCursor" onClick={ (event) => event.preventDefault()}>Metal detector</Link>
                </li>
                <li>
                    <Link to='/cake/cooking' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cooking</Link>
                </li>
                <li>
                    <Link to='/cake/chiller' className="disableCursor" onClick={ (event) => event.preventDefault()}>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
