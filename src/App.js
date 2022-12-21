import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import DashboardPage from './DashboardPage/DashboardPage';
import DepartmentsPage from './DepartmentsPage/DepartmentsPage';
import DepartmentDetailsPage from './DepartmentDetailsPage/DepartmentDetailsPage';
import EmployeesPage from './EmployeesPage/EmployeesPage';
import EmployeeDetailsPage from './EmployeeDetailsPage/EmployeeDetailsPage';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route
            path="/departments/:departmentId"
            element={<DepartmentDetailsPage />}
          />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route
            path="/employees/:employeeId"
            element={<EmployeeDetailsPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
