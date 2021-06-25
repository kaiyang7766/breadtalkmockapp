import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
  <>
    <ul>
      <li>
        <Link to="/cake" id='selectdepartment'>Cake</Link>
      </li>
      <li>
        <Link to="/beverage" id='selectdepartment'>Beverage</Link>
      </li>
      <li>
        <Link to="/FD" id='selectdepartment'>Frozen Dough</Link>
      </li>
      <li>
        <Link to="/toast" id='selectdepartment'>Toast</Link>
      </li>
      <li>
        <Link to="/HK" id='selectdepartment'>Hot Kitchen</Link>
      </li>
      <li>
        <Link to="/AM" id='selectdepartment'>A-Mix</Link>
      </li>
      <li>
        <Link to="/SD" id='selectdepartment'>Shaped Dough</Link>
      </li>
      <li>
        <Link to="/TMC" id='selectdepartment'>TMC</Link>
      </li>
    </ul>
  </>
  );
};

export default Navbar;
