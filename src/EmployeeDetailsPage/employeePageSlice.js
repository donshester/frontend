import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { employeesApi } from '../EmployeesPage/employeesApi';

const initialState = {
  employee: null
};

export const getEmployeeByIdAsync = createAsyncThunk(
  'employees/getById',
  async (employeeId) => {
    const response = await employeesApi.getEmployeeById(employeeId);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
);

export const employeePageSlice = createSlice({
  name: 'employee',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getEmployeeByIdAsync.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
  }
});

export default employeePageSlice.reducer;
