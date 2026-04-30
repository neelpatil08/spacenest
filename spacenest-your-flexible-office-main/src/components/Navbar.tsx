import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(false);

  // USER LOAD
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser && storedUser !== "undefined") {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          localStorage.removeItem("user");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener("userChanged", loadUser);

    return () => {
      window.removeEventListener("userChanged", loadUser);
    };
  }, []);

  // DARK MODE INIT
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userChanged"));
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-400/90 via-orange-500/80 to-orange-400/90 backdrop-blur-md shadow-md">
      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl font-bold text-white"
        >
          Space<span className="text-white">Nest</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            className="text-sm text-white/90 hover:text-white transition"
            to="/spaces"
          >
            Browse Spaces
          </Link>

          <Link
            className="text-sm text-white/90 hover:text-white transition"
            to="/"
          >
            How It Works
          </Link>

          <Link
            className="text-sm text-white/90 hover:text-white transition"
            to="/"
          >
            Pricing
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg bg-white/20 text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Auth */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">
                👋 {user.name}
              </span>

              <Button size="sm" variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>

              <Button
                size="sm"
                className="bg-white text-orange-500 hover:bg-gray-100"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;