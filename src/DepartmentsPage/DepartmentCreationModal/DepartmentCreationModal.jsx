import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createDepartmentAsync } from '../departmentsSlice';
import CustomAlert from '../../features/CustomAlert/CustomAlert';

function DepartmentCreationModal({ show, onHide }) {
  const dispatch = useDispatch();
  const [isDepartmentCreating, setIsDepartmentCreating] = useState(false);
  const [isAlertShow, setIsAlertShow] = useState(false);

  const formId = 'formDepartmentCreationId';
  const handleCreateDepartment = async (e) => {
    setIsDepartmentCreating(true);
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await dispatch(createDepartmentAsync(formData));

    setIsDepartmentCreating(false);

    if (response.error) {
      setIsAlertShow(true);
    } else {
      onHide();
    }
  };

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
        <Form id={formId} onSubmit={handleCreateDepartment}>
          <Form.Group className="mb-3" controlId="departmentName">
            <Form.Label>Department name</Form.Label>
            <Form.Control
              type="text"
              name={'title'}
              placeholder="Enter department name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="departmentInfoId">
            <Form.Label>Department info</Form.Label>
            <Form.Control
              type="text"
              name={'departmentInfo'}
              placeholder="Enter department info"
            />
          </Form.Group>
        </Form>
        {isAlertShow && (
          <CustomAlert
            onHide={() => setIsAlertShow(false)}
            heading="Error!"
            variant="danger"
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          type={'submit'}
          form={formId}
          disabled={isDepartmentCreating}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DepartmentCreationModal;
