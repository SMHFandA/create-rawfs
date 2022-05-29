import React, { useEffect } from 'react';

import { RootState } from 'src/appStore';
import {
  useAppDispatch,
  useAppSelector,
} from 'src/appHooks';
import {
  // selectors
  selectEmailField,
  selectPasswordField,
  selectIsSubmitDisabled,
  // creators
  emailFieldChange,
  openFormFields,
  closeFormFields,
  passwordFieldChange,
  signUpSubmit,
} from 'features/signUpPage/containers/SignUpPage.duck';

import Page from 'app/components/Page';
import Navbar from 'app/containers/Navbar';
import Container from 'app/components/Container';
import SingUpForm from 'features/signUpPage/components/SingUpForm';

interface Props {
}

const SignUpPage = (_props: Props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const emailField = useAppSelector((state: RootState) => selectEmailField(state));
  const passwordField = useAppSelector((state: RootState) => selectPasswordField(state));
  const isSubmitDisabled = useAppSelector((state: RootState) => selectIsSubmitDisabled(state));

  useEffect(() => {
    dispatch(openFormFields());
  }, []);

  useEffect(() => {
    return () => dispatch(closeFormFields());
  }, []);

  const handleEmailFieldChange = (value: string): void => {
    dispatch(emailFieldChange(value));
  };

  const handlePasswordFieldChange = (value: string): void => {
    dispatch(passwordFieldChange(value));
  };

  const handleSignUpSubmit = (): void => {
    dispatch(signUpSubmit());
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
              email={emailField.value}
              emailError={emailField.error}
              password={passwordField.value}
              passwordError={passwordField.error}
              isSubmitDisabled={isSubmitDisabled}
              onEmailChange={handleEmailFieldChange}
              onPasswordChange={handlePasswordFieldChange}
              onSubmit={handleSignUpSubmit}
            />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default SignUpPage;
