import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // Determines password strength based on length and pattern
  const getPasswordStrength = () => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Weak";
    if (/(?=.*[0-9])(?=.*[A-Z])/.test(password)) return "Strong";
    return "Medium";
  };

  // Form is considered valid only when all fields meet minimum criteria
  const isFormValid =
    formData.username.trim() && formData.email.trim() && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setError("Please fill all fields correctly");
      return;
    }

    setError("");

    // Creates a new user account without auto-login
    signup(formData.username, formData.email, password);

    toast.success("Account created successfully 🎉 Please sign in");

    // Redirects user to sign-in page after successful registration
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050b18] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md">
        <div
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-8
            shadow-2xl shadow-cyan-500/10
            transition transform hover:scale-[1.01]
          "
        >
          <div className="flex justify-center mb-4">
            <img
              src="/image/logo.png"
              alt="Bhusan Mart Logo"
              className="w-20 h-20 rounded-full shadow-md"
            />
          </div>

          <h2 className="text-3xl font-semibold text-center text-white mb-1">
            Create Account
          </h2>
          <p className="text-center text-white/60 mb-6">
            Join Bhusan Mart & start shopping smarter
          </p>

          {error && (
            <p className="text-red-400 text-sm text-center mb-4 animate-pulse">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-cyan-400 transition" />
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="
                  w-full pl-11 pr-4 py-3 rounded-xl
                  bg-black/40 text-white outline-none
                  border border-white/10
                  focus:border-cyan-400
                  focus:ring-2 focus:ring-cyan-400/30
                  transition
                "
              />
            </div>

            <div className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-cyan-400 transition" />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="
                  w-full pl-11 pr-4 py-3 rounded-xl
                  bg-black/40 text-white outline-none
                  border border-white/10
                  focus:border-cyan-400
                  focus:ring-2 focus:ring-cyan-400/30
                  transition
                "
              />
            </div>

            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-cyan-400 transition" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full pl-11 pr-12 py-3 rounded-xl
                  bg-black/40 text-white outline-none
                  border border-white/10
                  focus:border-cyan-400
                  focus:ring-2 focus:ring-cyan-400/30
                  transition
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-400 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {password && (
              <p
                className={`text-sm transition ${
                  getPasswordStrength() === "Weak"
                    ? "text-red-400"
                    : getPasswordStrength() === "Medium"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                Password strength: {getPasswordStrength()}
              </p>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              className={`
                w-full py-3 rounded-xl font-semibold transition-all duration-300
                ${
                  isFormValid
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-500/30"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }
              `}
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-white/70 mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-cyan-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
