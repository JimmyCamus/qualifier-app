import { useRouter } from "next/router";
import { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
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

  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:3000/api/auth/login`, {
      body: JSON.stringify(loginFormFields),
      method: "POST",
    });
    if (res.status === 401) {
      setLoginFormError(true);
      return;
    }
    const parsedResponse = await res.json();
    setLoginFormError(false);
    userContext.dispatch({ type: "login", user: parsedResponse.user });
    router.push("/");
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
