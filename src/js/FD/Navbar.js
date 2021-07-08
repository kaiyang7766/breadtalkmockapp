import React from 'react';
import {Link} from 'react-router-dom';

export default function FdNavbar() {
    return (
        <>
        <div className='container'>
            <h3> Frozen dough department 部</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/fd/trace' id='selectdepartment'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/fd/cleaning' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/fd/metal_meustronic' className="disableCursor" onClick={ (event) => event.preventDefault()}>Metal detector (Meustronic)</Link>
                </li>
                <li>
                    <Link to='/fd/metal_toledo' className="disableCursor" onClick={ (event) => event.preventDefault()}>Metal detector (Mettler Toledo)</Link>
                </li>
                <li>
                    <Link to='/fd/chiller' className="disableCursor" onClick={ (event) => event.preventDefault()}>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
