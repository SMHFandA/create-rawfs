import React from 'react';

interface Props {
  error: string;
}

const FieldError = (props: Props): React.ReactElement => {
  if (!props.error) {
    return null;
  }

  return (
    <p className='help is-danger'>{props.error}</p>
  );
};

export default FieldError;
