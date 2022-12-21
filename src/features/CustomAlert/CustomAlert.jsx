import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ onHide, heading, children, ...containerProps }) => {
  return (
    <Alert onClose={onHide} {...containerProps}>
      <Alert.Heading>{heading}</Alert.Heading>
      {children}
    </Alert>
  );
};

export default CustomAlert;
