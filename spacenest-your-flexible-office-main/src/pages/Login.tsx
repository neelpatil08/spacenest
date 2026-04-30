import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // ✅ FIXED BACKEND URL
      const res = await fetch("https://spacenest-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        // ✅ Store user
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Update navbar instantly
        window.dispatchEvent(new Event("userChanged"));

        alert("Login successful ✅");

        navigate("/home");
      } else {
        alert(data.message || "Login failed ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50">
      
      <div className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-10 rounded-3xl w-[420px]">
        
        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your SpaceNest account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full border p-3 pl-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <span className="absolute left-3 top-3 text-gray-400">📧</span>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full border p-3 pl-10 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <span className="absolute left-3 top-3 text-gray-400">🔒</span>

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;