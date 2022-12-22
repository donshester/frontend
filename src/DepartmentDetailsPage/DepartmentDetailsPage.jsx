import React, { useEffect, useState } from 'react';

import styles from './DepartmentDetailsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentByIdAsync } from './departmentPageSlice';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EmployeesTable from '../EmployeesPage/EmployeesTable/EmployeesTable';
import EmployeeCreationModal from '../EmployeesPage/EmployeeCreationModal/EmployeeCreationModal';

function DepartmentDetailsPage() {
  const { departmentId } = useParams();
  const department = useSelector((state) => state.departmentPage.department);
  const [creationModalShow, setCreationModalShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartmentByIdAsync(departmentId));
  }, [departmentId, dispatch]);

  return (
    <div>
      <h3>Department details page</h3>
      {department && (
        <>
          <div className={styles.info}>
            <p>Name: {department.title}</p>
            <p>Info: {department.departmentInfo}</p>
            <p>Employees count: {department.employeesCount}</p>
            <p>
              Head:{' '}
              {department.headEmployee && (
                <Link to={`/employees/${department.headEmployee.id}`}>
                  {`${department.headEmployee.firstName} ${department.headEmployee.surname}`}
                </Link>
              )}
            </p>
            <p>Creation date: {department.creationDate}</p>
          </div>

          <div className={'mt-4'}>
            <h3>Employees</h3>
            <Button
              onClick={() => setCreationModalShow(true)}
              className={'ms-3'}
            >
              Create
            </Button>
          </div>
          <EmployeesTable
            employees={department.employees}
            className={'mt-3'}
            isDetailsPage={true}
          />

          {creationModalShow && (
            <EmployeeCreationModal
              show={creationModalShow}
              onHide={() => setCreationModalShow(false)}
              linkedDepartmentId={departmentId}
            />
          )}
        </>
      )}
    </div>
  );
}

export default DepartmentDetailsPage;
