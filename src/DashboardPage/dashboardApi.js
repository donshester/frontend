export const dashboardApi = {
  getTopDepartments,
  getLastEmployees
};

function getTopDepartments() {
  return fetch(`${process.env.REACT_APP_URL}/dashboard/top_departments`);
}

function getLastEmployees() {
  return fetch(`${process.env.REACT_APP_URL}/dashboard/last_employees`);
}
