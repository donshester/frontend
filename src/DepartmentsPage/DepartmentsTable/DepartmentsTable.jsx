import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import CustomAlert from '../../features/CustomAlert/CustomAlert';
import { deleteDepartmentByIdAsync } from '../departmentsSlice';
import { useDispatch } from 'react-redux';

function DepartmentsTable({ departments, className }) {
  const [isDepartmentDeleting, setIsDepartmentDeleting] = useState(false);
  const [deletingDepartmentData, setDeletingDepartmentData] = useState({});
  const [isAlertShow, setIsAlertShow] = useState(false);
  const [alertErrorData, setAlertErrorData] = useState({});

  const dispatch = useDispatch();

  const handleDeleteDepartment = (id, name) => async () => {
    if (checkIsDepartmentDeleting(id)) {
      return;
    }

    setIsDepartmentDeleting(true);
    setIsAlertShow(false);
    setDeletingDepartmentData({ id, name });

    const result = await dispatch(deleteDepartmentByIdAsync(id));

    if (result.error) {
      setIsAlertShow(true);
      setAlertErrorData(result.error);
    }

    setIsDepartmentDeleting(false);
  };

  const checkIsDepartmentDeleting = (departmentId) =>
    isDepartmentDeleting && departmentId === deletingDepartmentData.id;

  return (
    <div className={className}>
      {isAlertShow && (
        <CustomAlert
          onHide={() => setIsAlertShow(false)}
          heading="Something went wrong"
          variant="danger"
        >
          We can`t delete <strong>{deletingDepartmentData.name}</strong>
          <p>{alertErrorData.message}</p>
        </CustomAlert>
      )}
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Employees count</th>
            <th>Head</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments?.map((department, index) => (
            <tr key={department.id}>
              <td>{index + 1}</td>
              <td>{department.title}</td>
              <td>{department.employeesCount}</td>
              <td>
                {department.headEmployee && (
                  <Link to={`/employees/${department.headEmployee.id}`}>
                    {`${department.headEmployee.firstName} ${department.headEmployee.surname}`}
                  </Link>
                )}
              </td>
              <td>{department.creationDate}</td>
              <td>
                <Button
                  onClick={handleDeleteDepartment(
                    department.id,
                    department.title
                  )}
                  disabled={checkIsDepartmentDeleting(department.id)}
                >
                  {checkIsDepartmentDeleting(department.id)
                    ? 'Deleting...'
                    : 'Delete'}
                </Button>
                <Button
                  to={`/departments/${department.id}`}
                  as={Link}
                  className={'ms-3'}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DepartmentsTable;
