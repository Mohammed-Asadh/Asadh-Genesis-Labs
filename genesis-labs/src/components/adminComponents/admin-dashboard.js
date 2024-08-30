import AdminLogin from './admin-login';
import GenesisLabsOrgStructure from './org-structure';
import {useNavigate} from 'react-router-dom';


function AdminDashBoard({adminName}) {
const navigate = useNavigate();
const viewEmployees = () => {
navigate('/employees');
};
return(
<div>
<h1>welcome to your DashBoard {adminName} </h1>
<p>
Welcome to the admin dashboard. Through this platform, you can perform all the crucial  operations (Create, Read, Update, Delete) for employees, departments, salaries, and managers.
</p>
<h2>Manage Employees: </h2>
<button type="button" onClick={viewEmployees}> View employees</button>
<br />
<button type="button">Manage Employees </button>
<br />
<button type="button">Add new Employees </button>
<br />
<button type="button"> Remove Employee </button>
<br />
<button type="button"> Assign Manager to the Employee </button>
<br />
<h2>Leadership Management: </h2>
<button type="button">View Manager's </button>
<br />
<button type="button"> Add New Manager</button>
<br />
<button type="button">Remove Manager </button>
<h2> Manage departments </h2>
<button type="button"> View current departments</button>
<br />
<button type="button"> Manage Departments </button>
<br />
<button type="button">Add new department </button>
<br />
<button type="button">View Department Reports </button>
<br />
<button type="button">Remove Department </button>



</div>
);
}
export default AdminDashBoard;