import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/list-employee")
      .then((res) => {
        console.log(res);
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Table = ({ employees }) => {
    return (
      <div>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Id
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                First Name
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Last Name
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Email
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Salary
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{employee.id}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{employee.first_name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{employee.last_name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{employee.email}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <Table employees={employees} />;
}
