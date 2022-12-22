import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './EmployeeDetailsPage.module.css';
import { getEmployeeByIdAsync } from './employeePageSlice';

const EmployeeDetailsPage = () => {
  const { employeeId } = useParams();
  const employee = useSelector((state) => state.employeePage.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeByIdAsync(employeeId));
  }, [employeeId, dispatch]);

  return (
    <div>
      <h3>Employee details page</h3>

      {employee && (
        <div className={styles.info}>
          <p>First name: {employee.firstName}</p>
          <p>Surname: {employee.surname}</p>
          <p>Post: {employee.post}</p>
          <p>Department: {employee.departmentId.title}</p>
          <p>Is head: {String(!!employee.headOf?.length)}</p>
          <p>Creation date: {employee.creationDate}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetailsPage;
