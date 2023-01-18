import { text } from "stream/consumers";
import { RegisterFormEntries } from "../../lib/types/entries.type";
import Alerts from "../Alerts";

const RegisterForm = ({
  handleSubmit,
  registerFormState,
  alertVisibility,
  alertType,
  alertText,
}: RegisterFormEntries) => {
  return (
    <>
      <Alerts type={alertType} text={alertText} />
      <div className="flex justify-center items-center h-full">
        <div className="card w-[90vw] lg:w-3/5 2xl:w-1/3  bg-primary text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">REGISTER</h2>
            <div className="card-body justify-center w-full">
              <div className="form-control justify-center w-full mb-5">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full text-black mb-4"
                  onChange={(e) =>
                    registerFormState.setRegisterFormFields({
                      ...registerFormState.registerFormFields,
                      email: e.target.value,
                    })
                  }
                />
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full text-black mb-4"
                  onChange={(e) =>
                    registerFormState.setRegisterFormFields({
                      ...registerFormState.registerFormFields,
                      username: e.target.value,
                    })
                  }
                />
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full text-black mb-4"
                  onChange={(e) =>
                    registerFormState.setRegisterFormFields({
                      ...registerFormState.registerFormFields,
                      password: e.target.value,
                    })
                  }
                />
                <button
                  className="btn btn-secondary mt-4"
                  onClick={() => handleSubmit()}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
