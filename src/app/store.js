import { configureStore } from '@reduxjs/toolkit';
import departmentsReducer from '../DepartmentsPage/departmentsSlice';
import employeesReducer from '../EmployeesPage/employeesSlice';
import departmentPageReducer from '../DepartmentDetailsPage/departmentPageSlice';
import employeePageReducer from '../EmployeeDetailsPage/employeePageSlice';
import dashboardPageReducer from '../DashboardPage/dashboardPageSlice';

export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    employees: employeesReducer,
    departmentPage: departmentPageReducer,
    employeePage: employeePageReducer,
    dashboardPage: dashboardPageReducer
  }
});
