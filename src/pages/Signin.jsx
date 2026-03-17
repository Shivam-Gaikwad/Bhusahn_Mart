import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Signin = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [pressed, setPressed] = useState(false);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Loads saved email if "Remember me" was previously enabled
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setFormData((prev) => ({ ...prev, email: savedEmail }));
      setRemember(true);
    }
  }, []);

  const isFormValid = formData.email && formData.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isFormValid) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const success = signin(formData.email, formData.password);

      if (success) {
        remember
          ? localStorage.setItem("rememberEmail", formData.email)
          : localStorage.removeItem("rememberEmail");

        toast.success("Welcome back! Login successful 🎉");
        navigate("/");
      } else {
        setError("Invalid email or password");
      }

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050b18] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-center mb-4">
            <img
              src="/image/logo.png"
              alt="Bhusan Mart"
              className="w-20 h-20 rounded-full shadow-lg"
            />
          </div>

          <h2 className="text-3xl font-semibold text-center text-white">
            Welcome Back
          </h2>
          <p className="text-center text-white/60 mb-6">
            Login to continue shopping
          </p>

          {error && (
            <p className="text-red-400 text-sm text-center mb-4">{error}</p>
          )}

          <form
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setPressed(true);
                setTimeout(() => setPressed(false), 150);
              }
            }}
            className="space-y-5"
          >
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 outline-none"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full pl-11 pr-12 py-3 rounded-xl bg-black/40 text-white border border-white/10 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm text-white/70">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="accent-cyan-400"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="text-cyan-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full py-3 rounded-xl font-semibold ${
                isFormValid
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                  : "bg-white/10 text-white/40 cursor-not-allowed"
              } ${pressed ? "scale-95" : ""}`}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-sm text-center text-white/70 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-cyan-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {showForgot && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#050b18] border border-white/10 rounded-xl p-6 w-80">
            <h3 className="text-white text-lg mb-3">Reset Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-black/40 text-white border border-white/10 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowForgot(false)}
                className="text-white/60 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  toast.info("Password reset link sent 📩");
                  setShowForgot(false);
                }}
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
