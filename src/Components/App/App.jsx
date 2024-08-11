// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Verify from "../Register/Verify/Verify";
import Signin from "../Register/Signin/Signin";
import "./app.scss";
import Signup from "../Register/Signup/Signup";
import Main from "../Main/Main";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
          <Route 
            path="/main" 
            element={isAuthenticated ? <Main /> : <Navigate to="/signin" />} 
          />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;