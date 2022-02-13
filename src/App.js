import React from "react";
import "./style.css";
import {Link, Outlet} from 'react-router-dom'

import Nav from './Component/Nav'

export default function App() {
  return (
    <div>
      <Nav />
      <h1>Hello StackBlitz!</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    <Outlet />
    </div>
  );
}
