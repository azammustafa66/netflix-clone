import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import Header from "../layout/Header";
import { BG_URL } from "../../utils/constants";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();

const signUpSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();

interface IFormInputs {
  name?: string;
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const [toggleSignIn, setToggleSignIn] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(toggleSignIn ? loginSchema : signUpSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    reset();
  };

  const handleSubmitButton = () => {
    console.log("clicked");
  };

  return (
    <>
      <Header />
      <article
        className="flex flex-col h-screen justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url(${BG_URL})`,
        }}
      >
        <div className="w-full max-w-md p-16 bg-black bg-opacity-80 text-white rounded-md">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {toggleSignIn ? "Log In" : "Sign Up"}
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            {!toggleSignIn && (
              <>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Full Name"
                  className="p-3 rounded bg-gray-700 text-white outline-none"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </>
            )}
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="p-3 rounded bg-gray-700 text-white outline-none"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-700 text-white outline-none"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <button
              type="submit"
              className="p-3 bg-red-600 rounded font-bold hover:bg-red-700 transition duration-200"
              onClick={handleSubmitButton}
            >
              {toggleSignIn ? "Log In" : "Sign Up"}
            </button>
          </form>
          <div className="mt-4 flex justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-red-600" />
              <span className="ml-2">Remember me</span>
            </label>
            <Link to="#" className="text-gray-300 hover:underline">
              Need help?
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-300 cursor-pointer">
            <span onClick={() => setToggleSignIn(!toggleSignIn)} className="hover:underline">
              {toggleSignIn
                ? "New to Netflix? Sign up now."
                : "Already have an account? Sign in."}
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default LogIn;
