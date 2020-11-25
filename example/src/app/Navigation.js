import React from 'react';
 
import { NavLink } from 'react-router-dom';
import {Link } from "react-router-dom";
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/" style={{ marginRight: 10 }}>Character Editor</NavLink>
          <NavLink to="/LocationEditor" style={{ marginRight: 10 }}>Location Editor</NavLink>
          <NavLink to="/InfoEditor" style={{ marginRight: 10 }}>Information Editor</NavLink>
       </div>
    );
}
 
export default Navigation;