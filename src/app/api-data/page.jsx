'use client'
import { useEffect, useState } from 'react';

export default function ApiData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/random-data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container mx-auto p-6">Loading...</div>;
  if (error) return <div className="container mx-auto p-6 text-red-500">{error}</div>;

  // Destructure data if it's not null and correctly formatted
  const employees = data.data || [];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Employee List</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {employees.length > 0 ? (
          <ul>
            {employees.map((employee) => (
              <li key={employee.id} className="border-b border-gray-200 py-4">
                <h2 className="text-xl font-semibold">{employee.employee_name}</h2>
                <p className="text-gray-700">ID: {employee.id}</p>
                <p className="text-gray-700">Salary: ${employee.employee_salary}</p>
                <p className="text-gray-700">Age: {employee.employee_age}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </div>
  );
}
