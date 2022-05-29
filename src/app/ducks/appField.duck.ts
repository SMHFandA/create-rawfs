import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from 'src/appStore';

export interface FieldOpenPayload {
  key: string;
  value: any;
}

export interface FieldSetPayload {
  key: string;
  field: AppField;
}

export interface FieldClosePayload {
  key: string;
}

export interface AppField {
  value: any;
  error: string;
}

export interface AppFieldState {
  [key: string]: AppField;
}

const initialState: AppFieldState = { };

export const appFieldSlice = createSlice({
  name: 'appField',
  initialState,
  reducers: {
    fieldOpen: (state: AppFieldState, action: PayloadAction<FieldOpenPayload>): void => {
      state[action.payload.key] = { value: action.payload.value, error: null };
    },
    fieldSet: (state: AppFieldState, action: PayloadAction<Partial<FieldSetPayload>>): void => {
      state[action.payload.key] = {
        ...state[action.payload.key],
        ...action.payload.field,
      };
    },
    fieldClose: (state: AppFieldState, action: PayloadAction<string>): void => {
      delete state[action.payload];
    },
  },
});

export const {
  fieldOpen,
  fieldSet,
  fieldClose,
} = appFieldSlice.actions;

export const selectFields = (state: RootState): AppFieldState => state.appField;

export default appFieldSlice.reducer;
