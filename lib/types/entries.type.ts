import { Dispatch, SetStateAction } from "react";
import { Alert } from "./alert.types";

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

export type RegisterFormFieldsType = {
  username: string;
  password: string;
  email: string;
};

export type RegisterFormStateType = {
  registerFormFields: RegisterFormFieldsType;
  setRegisterFormFields: Dispatch<SetStateAction<RegisterFormFieldsType>>;
};

export type RegisterFormEntries = {
  handleSubmit: Function;
  registerFormState: RegisterFormStateType;
  alertVisibility: boolean;
  alertType: string;
  alertText: string;
};

export type CommentFormFieldsType = {
  description: string;
  rating: number;
};

export type CommentFormStateType = {
  commentFormFields: CommentFormFieldsType;
  setCommentFormFields: Dispatch<SetStateAction<CommentFormFieldsType>>;
};

export type CreateGameFormType = {
  title: string;
  description: string;
  categories: string[];
  images: any;
};
