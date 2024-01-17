import useSignup from "../hooks/useSignup";
import { useRef } from "react";
import Loader from "../components/Loader";

function Signup() {
  const { isPending, signup } = useSignup();
  const form = useRef();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );

    form.current.reset();
  };

  return (
    <>
      <div className="h-screen relative">
        <div className="grid place-items-center w-full h-screen bg-black bg-opacity-60">
          <div className="bg-white p-8 bg-opacity-60 rounded-md max-w-md w-full">
            <h1 className="text-4xl mb-4 text-center text-black">Sign up</h1>
            <form
              onSubmit={handleSubmit}
              ref={form}
              className="flex flex-col gap-5"
            >
              <label className="form-label">
                <span>Your name</span>
                <input
                  ref={displayName}
                  type="text"
                  placeholder="Enter your name"
                />
              </label>
              <label className="form-label">
                <span>Your email</span>
                <input
                  ref={email}
                  type="email"
                  placeholder="Enter your email"
                />
              </label>
              <label className="form-label">
                <span>Your password</span>
                <input
                  ref={password}
                  type="password"
                  placeholder="Enter your password"
                />
              </label>
              <button className="flex items-center justify-center btn bg-emerald-700 text-white py-2 px-3 rounded-md text-lg">
                {isPending ? <Loader /> : "Signup"}
              </button>

              <p className="text-center text-base">
                Already have an account?{" "}
                <a className="text-lime-700" href="/login">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

{
  /* <button
                onClick={handleWithGoogle}
                className="flex items-center gap-2 justify-center btn bg-emerald-900 py-2 px-3 rounded-md text-lg text-white"
              >
                <FcGoogle className="text-2xl" /> Enter with Google
              </button> */
}
