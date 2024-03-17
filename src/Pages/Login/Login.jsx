import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { signInUser, signInWithGoogle, goToTop } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setLoginError("");

    signIn(email, password)
      .then(() => {
        swal({
          position: "top-center",
          icon: "success",
          title: "Successfully Signed In",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        // navigate user
        setTimeout(() => {
          navigate(location?.state ? location.state : "/dashboard");
        }, 2000);
      })
      .catch(() => {
        setLoginError("Invalid User. Please Check Email or Password Again");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        swal({
          position: "top-center",
          icon: "success",
          title: "Successfully Signed In",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        // navigate user
        setTimeout(() => {
          navigate(location?.state ? location.state : "/dashboard");
        }, 2000);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-right">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Enter Your Health Portal Securely. Your Wellness Awaits Beyond the
            Door.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <div className="absolute right-4">
                  {!showPassword ? (
                    <BiLowVision
                      className="cursor-pointer"
                      size="20px"
                      onClick={() => setShowPassword(!showPassword)}
                    ></BiLowVision>
                  ) : (
                    <BiShowAlt
                      className="cursor-pointer"
                      size="20px"
                      onClick={() => setShowPassword(!showPassword)}
                    ></BiShowAlt>
                  )}
                </div>
              </div>
            </div>

            <div className="mx-auto mb-4 pt-4  w-full px-10 text-center">
              {loginError && (
                <p className="text-rose-800 italic text-bold">{loginError}</p>
              )}
            </div>

            <div className="form-control mt-10">
              <button className="h-14 hover:scale-110 transition-transform font-semibold w-full bg-gradient-to-l from-blue-600 to-blue-950 text-white">
                Log in
              </button>
            </div>

            <div className="flex flex-col justify-between mt-10 mb-6 space-y-6 lg:space-y-0">
              <button
                onClick={handleGoogleSignIn}
                className="text-black btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize"
              >
                <FcGoogle></FcGoogle>
                Sign in with Google
              </button>
            </div>

            <div className="text-center pt-6">
              <small className="font-medium text-black">
                New to this Website? Please
                <Link to="/register" className="text-red-700 ml-1">
                  <button onClick={goToTop}>Sign Up</button>
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
