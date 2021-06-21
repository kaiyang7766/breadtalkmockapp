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
                    <Link to='/toast/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/toast/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/toast/metal_sesotec'>Metal detector (Sesotec)</Link>
                </li>
                <li>
                    <Link to='/toast/metal_meustronic'>Metal detector (Meustronic)</Link>
                </li>
                <li>
                    <Link to='/toast/cooking_baking'>Cooking (Baking)</Link>
                </li>
                <li>
                    <Link to='/toast/cooking_frying'>Cooking (Frying)</Link>
                </li>
                <li>
                    <Link to='/toast/chiller'>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
