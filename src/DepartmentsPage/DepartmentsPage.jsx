import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAllDepartmentsAsync } from './departmentsSlice';

import styles from './DepartmentsPage.module.css';
import DepartmentCreationModal from './DepartmentCreationModal/DepartmentCreationModal';
import { useDispatch, useSelector } from 'react-redux';
import DepartmentsTable from './DepartmentsTable/DepartmentsTable';

function DepartmentsPage() {
  const [creationModalShow, setCreationModalShow] = useState(false);
  const departments = useSelector((state) => state.departments.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDepartmentsAsync());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.header}>
        <h3>Departments</h3>
        <Button onClick={() => setCreationModalShow(true)} className={'ms-3'}>
          Create
        </Button>
      </div>
      <DepartmentsTable departments={departments} className={'mt-3'} />

      {creationModalShow && (
        <DepartmentCreationModal
          show={creationModalShow}
          onHide={() => setCreationModalShow(false)}
        />
      )}
    </div>
  );
}

export default DepartmentsPage;
