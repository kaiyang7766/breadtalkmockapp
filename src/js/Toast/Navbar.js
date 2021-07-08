import React from 'react';
import {Link} from 'react-router-dom';

export default function ToastNavbar() {
    return (
        <>
        <div className='container'>
            <h3> Toast department 吐司部</h3>
        <nav>
            <ul>
                <li>
                    <Link to='/toast/trace' id='selectdepartment'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/toast/cleaning' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/toast/metal_sesotec' className="disableCursor" onClick={ (event) => event.preventDefault()}>Metal detector (Sesotec)</Link>
                </li>
                <li>
                    <Link to='/toast/metal_meustronic' className="disableCursor" onClick={ (event) => event.preventDefault()}>Metal detector (Meustronic)</Link>
                </li>
                <li>
                    <Link to='/toast/cooking_baking' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cooking (Baking)</Link>
                </li>
                <li>
                    <Link to='/toast/cooking_frying' className="disableCursor" onClick={ (event) => event.preventDefault()}>Cooking (Frying)</Link>
                </li>
                <li>
                    <Link to='/toast/chiller' className="disableCursor" onClick={ (event) => event.preventDefault()}>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
