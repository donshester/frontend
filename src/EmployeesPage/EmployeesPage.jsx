import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Employees.module.css';
import EmployeeCreationModal from './EmployeeCreationModal/EmployeeCreationModal';
import EmployeesTable from './EmployeesTable/EmployeesTable';
import { getAllEmployeesAsync, searchEmployeeByAsync } from './employeesSlice';
import useDebounce from '../app/hooks';

const EmployeesPage = () => {
  const [creationModalShow, setCreationModalShow] = useState(false);
  const [surnameFilterValue, setSurnameFilterValue] = useState('');
  const debouncedSurnameFilterValue = useDebounce(surnameFilterValue);
  const employees = useSelector((state) => state.employees.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedSurnameFilterValue) {
      dispatch(searchEmployeeByAsync({ query: debouncedSurnameFilterValue }));
    } else {
      dispatch(getAllEmployeesAsync());
    }
  }, [debouncedSurnameFilterValue, dispatch]);

  return (
    <div>
      <div className={styles.header}>
        <h3>Employees</h3>
        <Button onClick={() => setCreationModalShow(true)} className={'ms-3'}>
          Create
        </Button>
        <Form.Control
          type="text"
          placeholder="search by surname"
          className={styles.searchControl}
          value={surnameFilterValue}
          onChange={(e) => setSurnameFilterValue(e.target.value)}
        />
      </div>
      <EmployeesTable employees={employees} className={'mt-3'} />

      {creationModalShow && (
        <EmployeeCreationModal
          show={creationModalShow}
          onHide={() => setCreationModalShow(false)}
        />
      )}
    </div>
  );
};

export default EmployeesPage;
