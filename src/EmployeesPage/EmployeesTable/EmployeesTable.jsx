import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { deleteEmployeeByIdAsync } from '../employeesSlice';
import CustomAlert from '../../features/CustomAlert/CustomAlert';
import { useDispatch } from 'react-redux';

function EmployeesTable({ employees, className, isDetailsPage = false }) {
  const [isEmployeeDeleting, setIsEmployeeDeleting] = useState(false);
  const [deletingEmployeeData, setDeletingEmployeeData] = useState({});
  const [isAlertShow, setIsAlertShow] = useState(false);
  const [alertErrorData, setAlertErrorData] = useState({});
  const dispatch = useDispatch();


  const handleDeleteEmployee = (id, firstName, surname) => async () => {
    if (checkIsEmployeeDeleting(id)) {
      return;
    }

    setIsEmployeeDeleting(true);
    setIsAlertShow(false);
    setDeletingEmployeeData({ id, firstName, surname });

    const result = await dispatch(deleteEmployeeByIdAsync(id));

    if (result.error) {
      setIsAlertShow(true);
      setAlertErrorData(result.error);
    }

    setIsEmployeeDeleting(false);
  };

  const checkIsEmployeeDeleting = (departmentId) =>
    isEmployeeDeleting && departmentId === deletingEmployeeData.id;

  return (
    <div className={className}>
      {isAlertShow && (
        <CustomAlert
          onHide={() => setIsAlertShow(false)}
          heading="Something went wrong"
          variant="danger"
        >
          We can`t delete{' '}
          <strong>
            {deletingEmployeeData?.firstName} {deletingEmployeeData?.surname}
            <p>{alertErrorData.message}</p>
          </strong>
        </CustomAlert>
      )}
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Post</th>
            {!isDetailsPage && (
              <>
                <th>Department</th>
                <th>Is head</th>
              </>
            )}
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.surname}</td>
              <td>{employee.post}</td>
              {!isDetailsPage && (
                <>
                  <td>{employee.departmentId?.title}</td>
                  <td>{String(!!employee.headOf?.length)}</td>
                </>
              )}
              <td>{employee.creationDate}</td>
              <td>
                <Button
                  onClick={handleDeleteEmployee(
                    employee.id,
                    employee.firstName,
                    employee.surname
                  )}
                  disabled={checkIsEmployeeDeleting(employee.id)}
                >
                  {checkIsEmployeeDeleting(employee.id)
                    ? 'Deleting...'
                    : 'Delete'}
                </Button>
                <Button
                  to={`/employees/${employee.id}`}
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

export default EmployeesTable;
