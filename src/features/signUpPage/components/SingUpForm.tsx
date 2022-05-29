import React from 'react';
import classnames from 'classnames';

import FieldError from 'app/components/FieldError';

interface Props {
  email: string;
  emailError: string;
  password: string;
  passwordError: string;
  isSubmitDisabled: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
}

const SingUpForm = (props: Props): React.ReactElement => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onEmailChange(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onPasswordChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    props.onSubmit();
  };

  const emailClassName = classnames('input', {
    'is-danger': !!props.emailError,
  });

  const passwordClassName = classnames('input', {
    'is-danger': !!props.passwordError,
  })

  return (
    <form
      className='box'
      onSubmit={handleSubmit}
    >
      <div className='field'>
        <label className='label'>
          {'Email'}
        </label>
        <div className='control'>
          <input
            className={emailClassName}
            type='email'
            placeholder='e.g. alex@example.com'
            autoFocus
            value={props.email}
            onChange={handleEmailChange}
          />
        </div>
        <FieldError error={props.emailError} />
      </div>
      <div className='field'>
        <label className='label'>
          {'Password'}
        </label>
        <div className='control'>
          <input
            className={passwordClassName}
            type='password'
            placeholder='********'
            value={props.password}
            onChange={handlePasswordChange}
          />
        </div>
        <FieldError error={props.passwordError} />
      </div>
      <button
        className='button is-primary'
        disabled={props.isSubmitDisabled}
        onClick={handleSubmit}
      >
        {'Sign up'}
      </button>
    </form>
  );
};

export default SingUpForm;
