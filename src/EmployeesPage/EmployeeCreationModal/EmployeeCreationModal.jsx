import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const EmployeeCreationModal = ({ show, onHide }) => {

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create new employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="employeeFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name={'firstName'}
              placeholder="Enter first name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="employeeSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              name={'surname'}
              placeholder="Enter surname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="employeePost">
            <Form.Label>Post</Form.Label>
            <Form.Control type="text" name={'post'} placeholder="Enter post" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="employeeDepartmentId">
            <Form.Label>Department id</Form.Label>
            <Form.Control
              type="text"
              name={'departmentId'}
              placeholder="Enter department id"

            />
          </Form.Group>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          type={'submit'}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeCreationModal;
