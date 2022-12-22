import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { employeesApi } from './employeesApi';

const initialState = {
  status: 'idle',
  data: []
};

export const getAllEmployeesAsync = createAsyncThunk(
  'employees/getAll',
  async () => {
    const response = await employeesApi.getAllEmployees();

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
);

export const deleteEmployeeByIdAsync = createAsyncThunk(
  'employees/delete',
  async (employeeId) => {
    const response = await employeesApi.deleteEmployeeById(employeeId);

    if (!response.ok) {
      const error = await response.json();

      throw { message: error?.error };
    }

    return employeeId;
  }
);

export const createEmployeeAsync = createAsyncThunk(
  'employees/create',
  async (employeeData) => {
    const response = await employeesApi.createEmployee(employeeData);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
);

export const searchEmployeeByAsync = createAsyncThunk(
  'employees/searchBy',
  async (queryParams) => {
    const response = await employeesApi.searchEmployeeBy(queryParams);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }
);

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployeesAsync.pending, (state) => {
        state.status = 'loading';
        state.data = [];
      })
      .addCase(getAllEmployeesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(getAllEmployeesAsync.rejected, (state) => {
        state.status = 'failed';
      });
    builder.addCase(deleteEmployeeByIdAsync.fulfilled, (state, action) => {
      state.data = state.data.filter(
        (employee) => employee.id !== action.payload
      );
    });
    builder.addCase(createEmployeeAsync.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(searchEmployeeByAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
