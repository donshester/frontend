import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dashboardApi } from './dashboardApi';
import { setDepartments } from '../DepartmentsPage/departmentsSlice';
import { setEmployees } from '../EmployeesPage/employeesSlice';

const initialState = {
  dashboardPage: {}
};

export const getTopDepartmentsAsync = createAsyncThunk(
  'dashboardPage/getTopDepartments',

  async (_, thunkAPI) => {
    thunkAPI.dispatch(setDepartments([]));

    const response = await dashboardApi.getTopDepartments();

    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();

    thunkAPI.dispatch(setDepartments(result));

    return result;
  }
);

export const getLastEmployeesAsync = createAsyncThunk(
  'dashboardPage/getLastEmployees',

  async (_, thunkAPI) => {
    thunkAPI.dispatch(setEmployees([]));

    const response = await dashboardApi.getLastEmployees();

    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();

    thunkAPI.dispatch(setEmployees(result));

    return result;
  }
);

export const dashboardPageSlice = createSlice({
  name: 'dashboardPage',
  initialState
});

export default dashboardPageSlice.reducer;
