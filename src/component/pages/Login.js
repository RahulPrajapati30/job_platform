import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../constant/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  // redux se auth state lete hain
  const { currentUser } = useSelector((state) => state.auth);

  // jab user authenticated ho jaye to redirect kar do
  useEffect(() => {
    if (currentUser) {
      toast.success("Login successfully !!!");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const onSubmit = (data) => {
    if (!data.email || !data.password) {
      toast.error("Please fill all fields");
      return;
    }

    // redux dispatch
    dispatch(loginUser(data));

    // check login success/fail
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      if (!user) {
        toast.error("Invalid email or password");
      }
    }, 200);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Login
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min length is 6" },
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                             dark:bg-gray-700 dark:text-white dark:border-gray-600 pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-blue-500 focus:outline-none"
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
{/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Login
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Login;