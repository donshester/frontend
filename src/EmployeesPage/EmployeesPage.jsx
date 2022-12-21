import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './Employees.module.css';
import EmployeesTable from './EmployeesTable/EmployeesTable';

const EmployeesPage = () => {

  return (
    <div>
      <div className={styles.header}>
        <h3>Employees</h3>
        <Button className={'ms-3'}>
          Create
        </Button>
        <Form.Control
          type="text"
          placeholder="search by surname"
        />
      </div>
      <EmployeesTable className={'mt-3'} />

    </div>
  );
};

export default EmployeesPage;
