import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from "./App";
import Home from "./Home"
import About from "./About"

ReactDOM.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
, document.getElementById("root"));
