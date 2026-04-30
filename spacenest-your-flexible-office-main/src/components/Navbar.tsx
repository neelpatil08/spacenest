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
                variant="outline"
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

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;