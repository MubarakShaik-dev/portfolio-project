import React from 'react';
import { ErrorWrapper } from './styles';

const ErrorMessage = ({ message }) => {
  return (
    <ErrorWrapper>
      <p>Error: {message}</p>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
