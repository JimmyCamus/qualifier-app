import { useRouter } from "next/router";
import { useState } from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import { useRegister } from "../../hooks/auth.hooks";
import { Alert, AlertTextOption } from "../../lib/types/alert.types";
import { RegisterFormFieldsType } from "../../lib/types/entries.type";

const Register = () => {
  const [registerFormFields, setRegisterFormFields] =
    useState<RegisterFormFieldsType>({
      username: "",
      password: "",
      email: "",
    });

  const [alertVisibility, setAlertVisibility] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");

  const handleRegister = useRegister();
  const router = useRouter();

  const handleSubmit = async () => {
    const status = await handleRegister(registerFormFields);
    if (status !== 201) {
      setAlertType(Alert.DANGER);
      setAlertText(AlertTextOption.REGISTER_FAILED);
      return;
    }
    setAlertType(Alert.SUCCESS);
    setAlertText(AlertTextOption.REGISTER_SUCCESS);
    router.push("/login");
  };
  return (
    <>
      <RegisterForm
        registerFormState={{ registerFormFields, setRegisterFormFields }}
        handleSubmit={handleSubmit}
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertText={alertText}
      />
    </>
  );
};

export default Register;
