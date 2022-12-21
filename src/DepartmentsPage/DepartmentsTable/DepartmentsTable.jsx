import React from 'react';
import {  Table } from 'react-bootstrap';

function DepartmentsTable({ className }) {


  return (
    <div className={className}>
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

        </tbody>
      </Table>
    </div>
  );
}

export default DepartmentsTable;
