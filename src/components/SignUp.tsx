import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { SocialSignIn } from "./SocialSignIn";
import { AtSign, Smile, LockKeyhole, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useState } from "react";

import axios from "axios";
import { RootState } from "../redux/store";
import { setToken } from "../redux/authSlice";
import { Link } from "react-router-dom";
import { Menubar } from "./Menubar";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type registerInputs = {
  email: string;
  name: string;
  password: string;
};

export const SignUp: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerInputs>();
  const onSubmit: SubmitHandler<registerInputs> = (data) => {
    setLoading(true);
    const postBody = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    axios
      .post("https://reqres.in/api/register", postBody)
      .then((res) => {
        dispatch(setToken(res.data.token));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <Menubar />
      <div className="container px-5 py-24 flex items-center justify-center mx-auto">
        <div className="w-2/5 text-center mb-12 ">
          <h2 className="text-3xl font-medium my-3 text-[#383e47]">Getting Started</h2>
          <p className="text-lg font-medium mt-5 mb-7 text-[#727e92]">Create an account to continue!</p>
          <SocialSignIn />
          <div className="flex items-center mt-8 mb-6">
            <div className="flex-1 border-t border-[#b1bac4]"></div>
            <span className="mx-2 text-[#727e92] text-xl font-medium">OR</span>
            <div className="flex-1 border-t border-[#b1bac4]"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <AtSign size={20} color="#727e92" />
                </div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: emailRegex,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border text-lg text-[#727e92]	 border-gray-300  rounded-xl block w-full pl-10 p-4  "
                      placeholder="Your Email"
                      {...field}
                    />
                  )}
                />
              </div>
              <p className="text-left mt-2">{errors.email && errors.email.message}</p>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <Smile size={20} color="#727e92" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-lg text-[#727e92] rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  "
                placeholder="Your Name"
                {...register("name")}
              />
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <LockKeyhole size={20} color="#727e92" />
              </div>
              <div className="absolute inset-y-0 right-5 flex items-center pl-3.5 pointer-events-none">
                <EyeOff size={20} color="#727e92" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-lg text-[#727e92] rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  "
                placeholder="name@flowbite.com"
                {...register("password", { required: true })}
              />
            </div>

            <div className="flex items-center my-5">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label htmlFor="link-checkbox" className="ml-4 text-lg font-medium  text-[#727e92]">
                I agree with the terms and conditions.
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#377DFF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-4 mr-2 mb-2 "
            >
              Sign Up
            </button>
          </form>

          <p className="ml-2 text-lg font-medium  text-[#727e92]">
            Already have an account?
            <Link to="/login" className="text-blue-600  hover:underline ml-2">
              Sign In
            </Link>
            .
          </p>
        </div>
      </div>
    </Fragment>
  );
};
