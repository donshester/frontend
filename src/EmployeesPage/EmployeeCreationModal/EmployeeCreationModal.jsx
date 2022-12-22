import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import CustomAlert from '../../features/CustomAlert/CustomAlert';
import { createEmployeeAsync } from '../employeesSlice';
import { addEmployee } from '../../DepartmentDetailsPage/departmentPageSlice';

const EmployeeCreationModal = ({ show, onHide, linkedDepartmentId }) => {
  const dispatch = useDispatch();
  const [isEmployeeCreating, setIsEmployeeCreating] = useState(false);
  const [isAlertShow, setIsAlertShow] = useState(false);
  const isHeadCheckboxContainer = useRef(null);

  const formId = 'formEmployeeCreationId';

    const handleCreateEmployee = async (e) => {
    setIsEmployeeCreating(true);
    e.preventDefault();

    const formData = new FormData(e.target);

    if (linkedDepartmentId) {
      formData.set('departmentId', linkedDepartmentId);
    }
    formData.set('isHead', +isHeadCheckboxContainer.current.checked);

    const response = await dispatch(createEmployeeAsync(formData));

    if (linkedDepartmentId && !response.error) {
      dispatch(addEmployee(response.payload));
    }

    setIsEmployeeCreating(false);

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
        <Modal.Title>Create new employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id={formId} onSubmit={handleCreateEmployee}>
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
              {...(linkedDepartmentId && {
                disabled: true,
                value: linkedDepartmentId
              })}
            />
          </Form.Group>
          <Form.Check
            type={'checkbox'}
            id={`isHead`}
            // name={'isHead'}
            label={'Is head'}
            ref={isHeadCheckboxContainer}
          />
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
          disabled={isEmployeeCreating}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeCreationModal;
