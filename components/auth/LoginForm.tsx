import { LoginFormEntries } from "../../lib/types/entries.type";

const LoginForm = ({
  handleSubmit,
  loginFormState,
  errorState,
}: LoginFormEntries) => {
  return (
    <>
      <div
        className={`alert alert-error shadow-lg ${
          errorState.loginFormError ? null : "hidden"
        }`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6 hover:cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => errorState.setLoginFormError(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>An error has occurred, please check your credentials.</span>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="card  w-1/3 bg-primary text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">LOGIN</h2>
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
                    loginFormState.setLoginFormFields({
                      ...loginFormState.loginFormFields,
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
                    loginFormState.setLoginFormFields({
                      ...loginFormState.loginFormFields,
                      password: e.target.value,
                    })
                  }
                />
                <button
                  className="btn btn-secondary mt-4"
                  onClick={() => handleSubmit()}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
