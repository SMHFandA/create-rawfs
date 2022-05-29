import { createDraftSafeSelector } from '@reduxjs/toolkit';

import {
  AppDispatch,
  RootState,
} from 'src/appStore';
import {
  type AppFieldState,
  type AppField,
  selectFields,
  fieldOpen,
  fieldSet,
  fieldClose,
} from 'app/ducks/appField.duck';
import {isEmail, isRequire} from 'app/utils/validators';

const FIELD__EMAIL = 'sign-up-field-email';
const FIELD__PASSWORD = 'sign-up-field-password';

const emptyField: AppField = {
  value: '',
  error: null,
};

export const selectEmailField: (state: RootState) => AppField = createDraftSafeSelector(
  selectFields,
  (fieldsState: AppFieldState) => {
    return fieldsState[FIELD__EMAIL] || emptyField;
  }
);

export const selectPasswordField: (state: RootState) => AppField = createDraftSafeSelector(
  selectFields,
  (fieldsState: AppFieldState) => {
    return fieldsState[FIELD__PASSWORD] || emptyField;
  }
);

export const selectIsSubmitDisabled: (state: RootState) => boolean = createDraftSafeSelector(
  selectEmailField,
  selectPasswordField,
  (
    emailField: AppField,
    passwordField: AppField
  ) => {
    return !emailField.value || !!emailField.error
      || !passwordField.value || !!passwordField.error
    ;
  }
);

export const openFormFields = () => (dispatch: AppDispatch): void => {
  dispatch(fieldOpen({ key: FIELD__EMAIL, value: '' }));
  dispatch(fieldOpen({ key: FIELD__PASSWORD, value: '' }));
};

export const closeFormFields = () => (dispatch: AppDispatch): void => {
  dispatch(fieldClose(FIELD__EMAIL));
  dispatch(fieldClose(FIELD__PASSWORD));
};

export const emailFieldChange = (value: string) => (dispatch: AppDispatch): void => {
  const errors = [];
  if (!isRequire(value)) {
    errors.push('This field is required');
  } else if (!isEmail(value)) {
    errors.push('The email is invalid');
  }
  const error = errors.length ? errors[0] : null;
  dispatch(fieldSet({ key: FIELD__EMAIL, field: { value, error } }));
};

export const passwordFieldChange = (value: string) => (dispatch: AppDispatch): void => {
  const errors = [];
  if (!isRequire(value)) {
    errors.push('This field is required');
  }
  const error = errors.length ? errors[0] : null;
  dispatch(fieldSet({ key: FIELD__PASSWORD, field: { value, error } }));
};

export const signUpSubmit = () => (dispatch: AppDispatch): void => {

};
