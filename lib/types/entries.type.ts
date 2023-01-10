import { Dispatch, SetStateAction } from "react";

export type LoginFormFieldsType = {
  username: string;
  password: string;
};

export type LoginFormEntries = {
  handleSubmit: Function;
  loginFormState: {
    loginFormFields: LoginFormFieldsType;
    setLoginFormFields: Dispatch<SetStateAction<LoginFormFieldsType>>;
  };
  errorState: {
    loginFormError: boolean;
    setLoginFormError: Dispatch<SetStateAction<boolean>>;
  };
};
