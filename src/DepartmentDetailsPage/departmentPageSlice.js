import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { departmentsApi } from '../DepartmentsPage/departmentsApi';

const initialState = {
  department: null
};

export const getDepartmentByIdAsync = createAsyncThunk(
  'departmentPage/getById',
  async (departmentId) => {
    const response = await departmentsApi.getDepartmentById(departmentId);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
);

export const departmentPageSlice = createSlice({
  name: 'departmentPage',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.department?.employees.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDepartmentByIdAsync.fulfilled, (state, action) => {
      state.department = action.payload;
    });
  }
});

export const { addEmployee } = departmentPageSlice.actions;

export default departmentPageSlice.reducer;
