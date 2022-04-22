import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
