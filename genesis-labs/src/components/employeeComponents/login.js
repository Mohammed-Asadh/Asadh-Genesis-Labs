import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeName && email && employeePassword) {
      onLogin(employeeName);
      navigate('/');
    } else {
      alert('The informations are invalid. Please enter carefully.');
    }
  };

  return (
    <div>
      <h2>Log In to Get Started</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employee_name">Employee UserName:</label>
          <input
            type="text"
            id="employee_name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            autofocus
          />
        </div>
        <div>
          <label htmlFor="email">Employee's Email Id: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <label htmlFor="employee_password">Employee's Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          id="employee_password"
          value={employeePassword}
          onChange={(e) => setEmployeePassword(e.target.value)}
          required
        />
        <br />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <p>Before loging in, please review our...<br />
          {<Link to="/privacypolicy">Privacy Policy </Link>}
          <br />
          and
          <br />
          {<Link to="/termsconditions">Terms And Conditions </Link>}
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;