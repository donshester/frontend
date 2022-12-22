export const departmentsApi = {
  getAllDepartments,
  getDepartmentById,
  deleteDepartmentById,
  createDepartment
};

function getAllDepartments() {
  return fetch(`${process.env.REACT_APP_URL}/department`);
}

function getDepartmentById(departmentId) {
  return fetch(`${process.env.REACT_APP_URL}/department/${departmentId}`);
}

function deleteDepartmentById(departmentId) {
  return fetch(`${process.env.REACT_APP_URL}/department/${departmentId}`, {
    method: 'DELETE'
  });
}

function createDepartment(departmentData) {
  return fetch(`${process.env.REACT_APP_URL}/department`, {
    method: 'POST',
    body: departmentData
  });
}
