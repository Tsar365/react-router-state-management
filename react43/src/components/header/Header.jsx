// import React from 'react';

import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h3>this is the header</h3>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/laptops">Laptops</a></li>
          <li><a href="/mobiles">Mobiles</a></li>
        </ul>
      </nav>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/mobiles">Mobiles</Link>
      </nav>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
      </nav>
    </div>
  );
};

export default Header;