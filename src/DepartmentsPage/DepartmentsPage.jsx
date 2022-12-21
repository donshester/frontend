import React from 'react';
import { Button } from 'react-bootstrap';
import DepartmentsTable from "./DepartmentsTable/DepartmentsTable";



function DepartmentsPage() {

  return (
    <div>
      <div className>
        <h3>Departments</h3>
        <Button className={'ms-3'}>
          Create
        </Button>
      </div>
      <DepartmentsTable className={'mt-3'} />
    </div>
  );
}

export default DepartmentsPage;
