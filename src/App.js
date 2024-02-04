import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={[<Header />, <Home />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
