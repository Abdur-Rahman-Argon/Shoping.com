import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useToken from "../../utilites/useToken";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, UpdatError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname;

  useEffect(() => {
    if (user && token) {
      navigate(from, { replace: true });
    }
  }, [user, token, from, navigate]);

  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.new_password;
    const confirmPassword = data.confirm_password;
    const user = { displayName, email };

    // console.log(data);
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
      await updateProfile(displayName);

      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };

  return (
    <div className="card mx-auto my-5 p-5 card-compact w-96 bg-base-100 shadow-2xl">
      <h1 className="text-center text-2xl font-bold">Please SignUp</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="label-text text-xl font-bold">Name:</span>
            </label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label className="label">
              <span className="label-text-alt text-base font-semibold text-red-600">
                {errors.name?.type === "required" && "Name is required"}
              </span>
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-xl font-bold">Email:</span>
            </label>
            <input
              {...register("email", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label className="label">
              <span className="label-text-alt text-base font-semibold text-red-600">
                {errors.email?.type === "required" && "Email is required"}
              </span>
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-xl font-bold">
                New Password:
              </span>
            </label>
            <input
              {...register("new_password", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label className="label">
              <span className="label-text-alt text-base font-semibold text-red-600">
                {errors.new_password?.type === "required" &&
                  "New Password is required"}
              </span>
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-xl font-bold">
                Confirm Password:
              </span>
            </label>
            <input
              {...register("confirm_password", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label className="label">
              <span className="label-text-alt text-base font-semibold text-red-600">
                {errors.confirm_password?.type === "required" &&
                  "confirm Password is required"}
              </span>
            </label>
          </div>

          <div>
            <input
              type="submit"
              value="SignUp"
              className="btn w-full my-2 btn-success"
            />
          </div>
        </form>
        <div>
          <p className=" text-center ">
            Already have an account?
            <Link to="/login" className="text-lg mx-1 text-green-600">
              LogIn
            </Link>
          </p>
        </div>
      </div>
      <div className="divider">OR</div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
