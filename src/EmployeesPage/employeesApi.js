export const employeesApi = {
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  createEmployee,
  searchEmployeeBy
};

function getAllEmployees() {
  return fetch(`employee`);
}

function getEmployeeById(employeeId) {
  return fetch(`${process.env.REACT_APP_URL}/employee/${employeeId}`);
}

function deleteEmployeeById(employeeId) {
  return fetch(`${process.env.REACT_APP_URL}/employee/${employeeId}`, {
    method: 'DELETE'
  });
}

function createEmployee(employeeData) {
  return fetch(`${process.env.REACT_APP_URL}/employee`, {
    method: 'POST',
    body: employeeData
  });
}

function searchEmployeeBy(queryParams) {
  const searchParam = new URLSearchParams(queryParams);

  return fetch(`${process.env.REACT_APP_URL}/employee/search?${searchParam}`);
}
