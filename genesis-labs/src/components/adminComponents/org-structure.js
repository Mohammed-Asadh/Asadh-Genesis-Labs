import React from 'react';

const GenesisLabsOrgStructure = () => {
  const departments = [
    {
      name: 'Artificial Intelligence Research',
      manager: 'Dr. Anya Petrova',
      teamMembers: [
        { name: 'Ethan Patel', position: 'Data Scientist' },
        { name: 'Maya Patel', position: 'AI Engineer' },
        { name: 'Ben Patel', position: 'Research Associate' },
        { name: 'Olivia Patel', position: 'NLP Specialist' },
      ],
    },
    {
      name: 'AI Product Development',
      manager: 'Alex Turner',
      teamMembers: [
        { name: 'Ethan Singh', position: 'AI Architect' },
        { name: 'Maya Singh', position: 'Software Engineer' },
        { name: 'Ben Singh', position: 'Data Analyst' },
        { name: 'Olivia Singh', position: 'Hardware Engineer' },
      ],
    },
    {
      name: 'AI Ethics and Governance',
      manager: 'Maya Singh',
      teamMembers: [
        { name: 'Ethan Davis', position: 'Ethics Officer' },
        { name: 'Maya Davis', position: 'Policy Analyst' },
        { name: 'Ben Davis', position: 'Compliance Specialist' },
      ],
    },
    {
      name: 'AI Business Development',
      manager: 'Ben Carter',
      teamMembers: [
        { name: 'Ethan Lee', position: 'Business Development Manager' },
        { name: 'Maya Lee', position: 'Sales Representative' },
        { name: 'Ben Lee', position: 'Marketing Specialist' },
      ],
    },
    {
      name: 'Human Resources (HR)',
      manager: 'Olivia Lee',
      teamMembers: [
        { name: 'Ethan Davis', position: 'HR Generalist' },
        { name: 'Maya Davis', position: 'Recruiter' },
        { name: 'Ben Davis', position: 'Training Specialist' },
      ],
    },
    {
      name: 'Finance and Accounting',
      manager: 'Ethan Davis',
      teamMembers: [
        { name: 'Maya Lee', position: 'Accountant' },
        { name: 'Ben Lee', position: 'Financial Analyst' },
        { name: 'Olivia Lee', position: 'Bookkeeper' },
      ],
    },
  ];

  return (
    <div>
      <h1>GenesisLabs Organizational Structure</h1>
      {departments.map((department) => (
        <div key={department.name}>
          <h2>{department.name}</h2>
          <p>Manager: {department.manager}</p>
          <ul>
            {department.teamMembers.map((member) => (
              <li key={member.name}>
                {member.name} - {member.position}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GenesisLabsOrgStructure;