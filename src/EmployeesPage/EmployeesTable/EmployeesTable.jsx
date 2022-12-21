import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';


function EmployeesTable({className}) {

  return (
    <div className={className}>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Post</th>
            <th>Department</th>
            <th>Is head</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    </div>
  );
}

export default EmployeesTable;
