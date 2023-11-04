import { SocialSignIn } from "./SocialSignIn";
import { AtSign, Smile, LockKeyhole, EyeOff } from "lucide-react";

export const SignUp: React.FC = () => {
  return (
    <div className="container px-5 py-24 flex items-center justify-center mx-auto">
      <div className="w-2/5 text-center mb-12 ">
        <h2 className="text-4xl font-medium">Getting Started</h2>
        <p>Welcome back, you’ve been missed!</p>
        <SocialSignIn />
        <div className="flex items-center mt-8 mb-6">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="mx-4 text-black text-sm">OR</span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <AtSign size={20} />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  "
            placeholder="name@flowbite.com"
          />
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Smile size={20} />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  "
            placeholder="name@flowbite.com"
          />
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <LockKeyhole size={20} />
          </div>
          <div className="absolute inset-y-0 right-5 flex items-center pl-3.5 pointer-events-none">
            <EyeOff size={20} />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  "
            placeholder="name@flowbite.com"
          />
        </div>
        <div className="flex items-center my-5">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label htmlFor="link-checkbox" className="ml-2 font-medium	 text-lg	 text-gray-900 ">
            I agree with the terms and conditions.
          </label>
        </div>
        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 "
        >
          Default
        </button>
        <p className="ml-2 text-sm font-medium text-gray-900 ">
          Already have an account?
          <a href="#" className="text-blue-600  hover:underline">
            Sign In
          </a>
          .
        </p>
      </div>
    </div>
  );
};
