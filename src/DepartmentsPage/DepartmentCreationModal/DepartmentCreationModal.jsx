import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function DepartmentCreationModal({ show, onHide }) {

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create new department</Modal.Title>
      </Modal.Header>
      <Modal.Body>

          <Form.Group className="mb-3" controlId="departmentName">
            <Form.Label>Department name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="departmentInfoId">
            <Form.Label>Department info</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department info"
            />
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DepartmentCreationModal;
