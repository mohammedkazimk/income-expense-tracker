import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
} from "lucide-react";

export default function SigninModal({ isOpen, onClose, onSignupClick }) {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameStatus, setUsernameStatus] = useState({status:"",message:""});

  // Disable body scroll
  useEffect(() => {
    if(isOpen){
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  // ESC Close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  
  useEffect(() => {
      if (!username.trim()) {
      setUsernameStatus("");
      return;
    }

    const timer = setTimeout(() => {
      checkUsername(username);
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

    if (!isOpen) return null;

  const checkUsername = async (value) => {
    try {
      // Example API
      // const res = await fetch(`/api/check-username?username=${value}`);
      // const data = await res.json();
      // setUsernameStatus(data.available ? "available" : "taken");

      // Demo
      const unavailable = ["admin", "root", "kazim"];
      const specialChars = /[^a-z0-9 ]/;
      if(specialChars.test(value.toLowerCase())){
        setUsernameStatus({status:"error",message:"Special Characters are not allowed"})
        return
      }
      if(value.includes(" ")){
        setUsernameStatus({status:"error",message:"Space Not Allowed"})
        return
      }
      if (unavailable.includes(value.toLowerCase())) {
        setUsernameStatus({status:"error",message:"Username is already taken"});
      } else {
        setUsernameStatus({status:"success",message:"Username is available"});
      }
    } catch (err) {
      setUsernameStatus({status:"",message:""});
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-24 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[calc(100vh-3rem)] bg-white rounded-2xl border border-gray-200 shadow-lg flex flex-col"
      >
        {/* Header */}
          <div className="p-8 pb-0">
    
        <button
            onClick={onClose}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="text-3xl font-bold text-black mb-8">
          Sign in
        </h1>
        </div>
        <div className="flex-1 overflow-y-auto px-8 pb-8">
        {/* Name */}
        <form action="">

        {/* Username */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            Username
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-3.5 text-gray-500"
            />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              className="w-full border rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {usernameStatus.status === "success" && (
            <p className="text-green-600 text-sm mt-2">
              ✓ {usernameStatus.message}
            </p>
          )}

          {usernameStatus.status === "error" && (
            <p className="text-red-600 text-sm mt-2">
              ✗ {usernameStatus.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-3.5 text-gray-500"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              required
              className="w-full border rounded-lg pl-10 pr-12 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-3 top-3 text-gray-500 hover:text-black"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={usernameStatus.status === "error"}
          className="w-full disabled:bg-gray-400 disabled:cursor-not-allowed bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Sign in
        </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t"></div>

          <span className="mx-4 text-gray-500 text-sm">
            or
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        {/* Google */}
        <button
          className="w-full border rounded-lg py-3 flex justify-center items-center gap-3 hover:bg-gray-100 transition"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 15.4 18.9 12 24 12c3 0 5.8 1.1 8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.2C29.2 36 26.8 37 24 37c-5.2 0-9.6-3.3-11.1-8l-6.6 5.1C9.6 39.7 16.3 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3 5.3-5.9 6.8l6.3 5.2C39.5 36.5 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
            />
          </svg>

          Continue with Google
        </button>
        {/* Sign In */}
        <div className="text-center mt-6">
          <span className="text-gray-500">
              Don't have an account?
          </span>

          <button 
          onClick={onSignupClick}
          className="ml-2 font-semibold hover:underline">
            Sign Up
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

