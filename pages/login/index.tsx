import { useRouter } from "next/router";
import { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import { useLogin } from "../../hooks/auth.hooks";
import { useUser } from "../../lib/contexts/user.context";
import { LoginFormFieldsType } from "../../lib/types/entries.type";

const Login = () => {
  const [loginFormFields, setLoginFormFields] = useState<LoginFormFieldsType>({
    username: "",
    password: "",
  });
  const [loginFormError, setLoginFormError] = useState<boolean>(false);

  const userContext = useUser();
  const router = useRouter();
  const handleLogin = useLogin();

  const handleSubmit = async () => {
    await handleLogin(userContext, router, loginFormFields, setLoginFormError);
  };

  return (
    <LoginForm
      errorState={{ loginFormError, setLoginFormError }}
      loginFormState={{ loginFormFields, setLoginFormFields }}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
