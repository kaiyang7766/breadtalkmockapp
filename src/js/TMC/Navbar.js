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
                    <Link to='/TMC/trace' id='selectdepartment'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/TMC/cleaning' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/TMC/metal' className="disableCursor" onClick={ (event) => event.preventDefault()}>Metal detector</Link>
                </li>
                <li>
                    <Link to='/TMC/cooking' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cooking</Link>
                </li>
                <li>
                    <Link to='/TMC/chiller' className="disableCursor" onClick={ (event) => event.preventDefault()}>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
