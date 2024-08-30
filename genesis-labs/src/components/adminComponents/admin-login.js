import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AdminLogin({onAdminLogin}) {
const [adminName, setAdminName] = useState("");
const [adminEmail, setAdminEmail] = useState("");
const [adminPassword, setAdminPassword] = useState("");
const navigate = useNavigate();

const handleAdminLogin= (e) => {
e.preventDefault();
if (adminName=="Salman" && adminEmail=="salman123@gmail.com" && adminPassword=="admin") {
onAdminLogin(adminName);
navigate('/');
}
else{
alert("Unauthorized admin login credentials");
}
}
return(
<div>
<h2> Admin Login form </h2>
<p>
welcome to GenesisLabs control center. 
</p>
<p>
Please login to continue.
</p>
<form onSubmit={handleAdminLogin}>
<label htmlFor="admin_name"> enter your Admin User name: </label>
<input type="text" id="admin_name" value={adminName} onChange={(e) => setAdminName(e.target.value)} require />
<label htmlFor="email_admin"> provide your admin Email ID: </label>
<input type="email" id="email_admin" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} required />
<br />
<label htmlFor="admin_password"> Please enter your Password: </label>
<input type="password" id="admin_password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required />
<button type="submit"> Login as Admin  </button>
</form>


</div>
);

}

export default AdminLogin;