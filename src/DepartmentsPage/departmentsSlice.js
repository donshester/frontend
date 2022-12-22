import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { departmentsApi } from './departmentsApi';

const initialState = {
  status: 'idle',
  data: []
};

export const getAllDepartmentsAsync = createAsyncThunk(
  'departments/getAll',
  async () => {
    const response = await departmentsApi.getAllDepartments();

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
);

export const deleteDepartmentByIdAsync = createAsyncThunk(
  'departments/delete',
  async (departmentId) => {
    const response = await departmentsApi.deleteDepartmentById(departmentId);

    if (!response.ok) {
      const error = await response.json();

      throw { message: error?.error };
    }

    return departmentId;
  }
);

export const createDepartmentAsync = createAsyncThunk(
  'departments/create',
  async (departmentData) => {
    const response = await departmentsApi.createDepartment(departmentData);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
);

export const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    setDepartments: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDepartmentsAsync.pending, (state) => {
        state.status = 'loading';
        state.data = [];
      })
      .addCase(getAllDepartmentsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(getAllDepartmentsAsync.rejected, (state) => {
        state.status = 'failed';
      });
    builder.addCase(deleteDepartmentByIdAsync.fulfilled, (state, action) => {
      state.data = state.data.filter(
        (department) => department.id !== action.payload
      );
    });
    builder.addCase(createDepartmentAsync.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  }
});

export const { setDepartments } = departmentsSlice.actions;

export default departmentsSlice.reducer;
