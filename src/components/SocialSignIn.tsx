import { FcGoogle } from "react-icons/fc";
import { BiLogoApple } from "react-icons/bi";

export const SocialSignIn: React.FC = () => {
  return (
    <div className="container mx-auto w-full flex gap-5">
      <button
        type="button"
        className="w-full py-4 flex justify-center gap-4 text-gray-400 bg-[#F0F5FA]  font-medium rounded-lg text-sm px-5  text-center items-center mr-2 mb-2"
      >
        <FcGoogle className="text-3xl" />
        <span className="text-lg">Sign in with Google</span>
      </button>
      <button
        type="button"
        className="w-full py-4 flex justify-center gap-4 text-gray-400 bg-[#F0F5FA]  font-medium rounded-lg text-sm px-5  text-center items-center mr-2 mb-2"
      >
        <BiLogoApple className="text-3xl" />
        <span className="text-lg">Sign Up with Apple ID</span>
      </button>
    </div>
  );
};
