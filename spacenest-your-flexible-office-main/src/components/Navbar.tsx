import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userChanged"));
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 
        bg-white/40 backdrop-blur-xl 
        border-b border-orange-200/40 shadow-sm">

        <div className="container flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold text-gray-800">
            Space<span className="text-orange-500">Nest</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">

            <Link className="text-sm text-gray-700 hover:text-orange-500" to="/spaces">
              Browse Spaces
            </Link>

            <Link className="text-sm text-gray-700 hover:text-orange-500" to="/">
              How It Works
            </Link>

            <Link className="text-sm text-gray-700 hover:text-orange-500" to="/">
              Pricing
            </Link>

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
                <Button
                  size="sm"
                  className="bg-orange-500 text-white hover:bg-orange-600"
                  onClick={() => navigate("/login")}
                >
                  Log In
                </Button>

                <Button
                  size="sm"
                  className="bg-green-500 text-white hover:bg-green-600"
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
            className="md:hidden text-gray-800"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ✅ MOBILE MENU (THIS WAS MISSING) */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full 
          bg-white/90 backdrop-blur-xl 
          px-6 py-4 space-y-4 shadow-lg z-50">

          <Link to="/spaces" onClick={() => setMobileOpen(false)}>
            Browse Spaces
          </Link>

          <Link to="/" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>

          <Link to="/" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>

          {user ? (
            <>
              <div className="text-orange-500">👋 {user.name}</div>

              <Button
                className="w-full"
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
                className="w-full bg-orange-500 text-white"
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(false);
                }}
              >
                Log In
              </Button>

              <Button
                className="w-full bg-green-500 text-white"
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
      )}
    </>
  );
};

export default Navbar;