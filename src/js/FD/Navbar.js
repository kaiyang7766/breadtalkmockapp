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
                    <Link to='/fd/trace'>Traceability System 追溯系统</Link>
                </li>
                <li>
                    <Link to='/fd/cleaning'>Cleaning and sanitation</Link>
                </li>
                <li>
                    <Link to='/fd/metal_meustronic'>Metal detector (Meustronic)</Link>
                </li>
                <li>
                    <Link to='/fd/metal_toledo'>Metal detector (Mettler Toledo)</Link>
                </li>
                <li>
                    <Link to='/fd/chiller'>Chiller and Freezer</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
