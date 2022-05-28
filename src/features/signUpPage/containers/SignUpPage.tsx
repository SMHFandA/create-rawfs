import React, { useState } from 'react';

import Page from 'app/components/Page';
import Navbar from 'app/containers/Navbar';
import Container from 'app/components/Container';
import SingUpForm from 'features/signUpPage/components/SingUpForm';

interface Props {
}

const SignUpPage = (_props: Props): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value: string): void => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string): void => {
    setPassword(value);
  };

  return (
    <Page
      title='Sign up'
    >
      <Navbar />
      <Container>
        <div className='columns mt-6'>
          <div className='column is-4 is-offset-4'>
            <div className='is-size-4'>{'Sign up'}</div>
            <SingUpForm
              email={email}
              password={password}
              onEmailChange={handleEmailChange}
              onPasswordChange={handlePasswordChange}
            />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default SignUpPage;
