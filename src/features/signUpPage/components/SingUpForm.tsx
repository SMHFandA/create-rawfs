import React from 'react';

interface Props {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}

const SingUpForm = (_props: Props): React.ReactElement => {
  return (
    <form className='box'>
      <div className='field'>
        <label className='label'>
          {'Email'}
        </label>
        <div className='control'>
          <input
            className='input'
            type='email'
            placeholder='e.g. alex@example.com'
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>
          {'Password'}
        </label>
        <div className='control'>
          <input
            className='input'
            type='password'
            placeholder='********'
          />
        </div>
      </div>
      <button
        className='button is-primary'
      >
        {'Sign up'}
      </button>
    </form>
  );
};

export default SingUpForm;
