import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { useState } from 'react';
import logo from './Logo.jpeg';
import Home from './components/otherComponents/homeComponent';
import Login from './components/employeeComponents/login';
import EmployeeDashBoard from './components/employeeComponents/employee-dashboard';
import AdminLogin from './components/adminComponents/admin-login';
import AdminDashBoard from './components/adminComponents/admin-dashboard';
import GenesisLabsOrgStructure from './components/adminComponents/org-structure';
import Footer from './components/otherComponents/footerComponent';
import Contact from './components/otherComponents/contactComponent';
import PrivacyPolicy from './components/otherComponents/privacy-policy';
import TermsAndConditions from './components/otherComponents/terms-conditions';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [employeeName, setEmployeeName] = useState("");
  const [adminName, setAdminName] = useState("");

  const handleLogin = (employeename) => {
  setIsLoggedIn(true);
  setIsAdminLoggedIn(false); 
  setEmployeeName(employeename);
  };

  const handleAdminLogin = (adminusername) => {
  setIsAdminLoggedIn(true);
  setIsLoggedIn(false); 
  setAdminName(adminusername);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false);
    setEmployeeName("");
    setAdminName("");
  };

return(
<Router>
<div>
<header>
<img src={logo} alt="Logo of Genesis Labs"/>
<nav>
    {isLoggedIn || isAdminLoggedIn ? <button onClick={handleLogout}>Logout</button> : null}

<ul>
<li>
<Link to="/">Home</Link>
</li>
  {!isLoggedIn && !isAdminLoggedIn && <li><Link to="/login">Login</Link></li>}
  {!isLoggedIn && !isAdminLoggedIn && <li><Link to="/adminlogin">AdminLogin</Link></li>}
  {isLoggedIn && <li><Link to="/dashboard">Dash Board</Link></li>}
  {isAdminLoggedIn && <li><Link to="/admindashboard">Admin Dashboard</Link></li>}
  
</ul>
</nav>
</header>
<Routes>
<Route path="/" element={<Home />} exact />
<Route path="/login" element={<Login onLogin={handleLogin} />} />
  <Route path="/dashboard" element={isLoggedIn ? <EmployeeDashBoard employeeName={employeeName} /> : <Login onLogin={handleLogin} />} />
<Route path="/adminlogin" element={<AdminLogin onAdminLogin={handleAdminLogin} />} />
    <Route path="/admindashboard" element={isAdminLoggedIn ? <AdminDashBoard adminName={adminName} /> : <AdminLogin onAdminLogin={handleAdminLogin} />} />
  <Route path="/employees" element={<GenesisLabsOrgStructure />} />

  <Route path="/contact" element={<Contact />} />
<Route path="/privacypolicy" element={<PrivacyPolicy />} />
<Route path="/termsandconditions" element={<TermsAndConditions />} />
</Routes>
</div>
      <>
        <Footer />
      </>
</Router>
);
}

export default App;