import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";

const Registration = () => {
  const axiosPublic = useAxiosPublic();

  const { createUser, updateUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [registerError, setRegisterError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");

  const navigate = useNavigate();

  // set button disabled

  const handleButtonDisable = (e) => {
    const termsAccepted = e.target.checked;
    console.log(termsAccepted);
    // button disabled

    if (termsAccepted) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const avatar = form.avatar.value;
    const district = form.district.value;
    const upazilla = form.upazilla.value;
    const blood = form.blood.value;
    const password = form.password.value;
    console.log(email, password, blood, upazilla, district, avatar, name);

    setRegisterError("");
    setRegistrationSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password should have at least one uppercase character"
      );
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setRegisterError("Your Password must have one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        updateUser(name, avatar)
          .then(() => {
            // create user in data base
            const userInfo = {
              name: name,
              email: email,
              blood: blood,
              upazilla: upazilla,
              district: district,
              avatar: avatar,
              role: 'user'
            };
            axiosPublic.post("/users", userInfo)
            .then(res=> {
              if(res.data.insertedId){
                swal({
                  position: "top-center",
                  icon: "success",
                  title: "Registration Successfull",
                  showConfirmButton: false,
                  showCancelButton: false,
                  timer: 2000,
                });
                setTimeout(() => {
                  navigate("/dashboard");
                }, 2000);
              }
            })
         
          })
          .catch();
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-right">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Join Our Health Community Today. Registration is Your First Step
            Towards a Healthier Tomorrow.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Avatar URL</span>
              </label>
              <input
                type="text"
                name="avatar"
                placeholder="avatar URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blood Group</span>
              </label>
              <input
                type="text"
                name="blood"
                placeholder="blood group"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <input
                type="text"
                name="district"
                placeholder="district"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upazilla</span>
              </label>
              <input
                type="text"
                name="upazilla"
                placeholder="upazilla"
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
            <div className="py-6">
              <input
                onChange={handleButtonDisable}
                type="checkbox"
                name="terms"
                id=""
                required
              />{" "}
              {isDisabled ? (
                <span className="text-red-900 pl-3 font-semibold">
                  Please Accept Our Terms & Conditions*
                </span>
              ) : (
                <span className="text-green-900 pl-3 font-semibold">
                  Terms & Conditions Accepted
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                disabled={isDisabled}
                className={`w-full  font-semibold text-white h-14  ${
                  isDisabled
                    ? "bg-gray-600"
                    : " bg-gradient-to-r from-blue-900 via-blue-700 to-blue-200  hover:scale-110 transition-transform"
                }`}
              >
                Submit
              </button>
            </div>

            <div className="mx-auto mt-10 w-full px-10 text-center">
              {registerError && (
                <p className="text-red-900 italic font-semibold">
                  {registerError}
                </p>
              )}
              {registrationSuccess && (
                <p className="text-green-900">{registrationSuccess}</p>
              )}
            </div>

            <div className="text-center pt-10">
              <small className="font-medium text-black">
                Already Have an Account? Please
                <Link to="/login" className="text-green-900 ml-2 font-bold">
                  <button>Login</button>
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
