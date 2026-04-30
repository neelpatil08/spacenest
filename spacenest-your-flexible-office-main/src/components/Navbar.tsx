import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(false); // ✅ NEW

  // 🔥 USER LOAD
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

  // 🌙 DARK MODE INIT
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // 🌙 TOGGLE FUNCTION
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/40">
      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-bold">
          Space<span className="text-primary">Nest</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          <Link to="/spaces" className="text-sm">Browse Spaces</Link>
          <Link to="/" className="text-sm">How It Works</Link>
          <Link to="/" className="text-sm">Pricing</Link>

          {/* 🌙 DARK MODE BUTTON */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* 🔥 AUTH UI */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-orange-500 font-medium">
                👋 {user.name}
              </span>

              <Button size="sm" variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button size="sm" variant="outline" onClick={() => navigate("/login")}>
                Log In
              </Button>

              <Button size="sm" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </>
          )}

        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4">

          <Link to="/spaces" onClick={() => setMobileOpen(false)}>
            Browse Spaces
          </Link>

          {/* 🌙 DARK MODE MOBILE */}
          <button
            onClick={toggleTheme}
            className="w-full px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          <div className="flex gap-3 pt-2">

            {user ? (
              <>
                <span className="flex-1 text-orange-500">
                  👋 {user.name}
                </span>

                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    navigate("/login");
                    setMobileOpen(false);
                  }}
                >
                  Log In
                </Button>

                <Button
                  className="flex-1"
                  onClick={() => {
                    navigate("/signup");
                    setMobileOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;