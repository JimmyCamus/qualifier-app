import { Dispatch, SetStateAction } from "react";

export type LoginFormFieldsType = {
  username: string;
  password: string;
};

export type LoginFormStateType = {
  loginFormFields: LoginFormFieldsType;
  setLoginFormFields: Dispatch<SetStateAction<LoginFormFieldsType>>;
};

export type LoginFormErrorStateType = {
  loginFormError: boolean;
  setLoginFormError: Dispatch<SetStateAction<boolean>>;
};

export type LoginFormEntries = {
  handleSubmit: Function;
  loginFormState: LoginFormStateType;
  errorState: LoginFormErrorStateType;
};
