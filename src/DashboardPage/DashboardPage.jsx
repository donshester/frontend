import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeesTable from '../EmployeesPage/EmployeesTable/EmployeesTable';
import DepartmentsTable from '../DepartmentsPage/DepartmentsTable/DepartmentsTable';
import {
  getLastEmployeesAsync,
  getTopDepartmentsAsync
} from './dashboardPageSlice';

function DashboardPage() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.data);
  const departments = useSelector((state) => state.departments.data);

  useEffect(() => {
    dispatch(getTopDepartmentsAsync());
    dispatch(getLastEmployeesAsync());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h3>Employees</h3>
        <EmployeesTable employees={employees} className={'mt-3'} />
      </div>
      <div>
        <h3>Departments</h3>
        <DepartmentsTable departments={departments} className={'mt-3'} />
      </div>
    </div>
  );
}

export default DashboardPage;
