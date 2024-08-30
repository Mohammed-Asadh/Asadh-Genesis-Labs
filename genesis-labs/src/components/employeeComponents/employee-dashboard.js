function EmployeeDashBoard({ employeeName }) {
  const employeeDetails = {
      department: "Research and Development (R&D)",
      manager: " Dr. Anya Petrova",
      salary: "rs.2,50,000",
};

return(
    <div>
      <main>
        <h1>Welcome to Your Digital Workspace!, {employeeName}!</h1>
        <section>
          <h2>Your Details</h2>
          <p><strong>Salary:</strong> {employeeDetails.salary}</p>
          <p><strong>Department:</strong> {employeeDetails.department}</p>
          <p><strong>Manager:</strong> {employeeDetails.manager}</p>
        </section>
        <section>
          <h2>Tasks to Do:</h2>
          <p>Your work will be assigned to you soon!</p>
        </section>
      </main>
    </div>
);
}

export default EmployeeDashBoard;