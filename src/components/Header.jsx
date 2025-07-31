import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
           <Link
              to="/"
              className="text-3xl font-bold text-blue-600 cursor-pointer"
              onClick={() => {
                handleNavClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Lokaci Pro
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 font-semibold">
            <Link
              to="/#features"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleNavClick}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleNavClick}
            >
              Pricing
            </Link>
            <Link
              to="/#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleNavClick}
            >
              Reviews
            </Link>
            <Link
              to="/#faq"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleNavClick}
            >
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              +91-9876543210
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Free Demo
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={handleNavClick}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={handleNavClick}
              >
                Pricing
              </Link>
              <Link
                to="/#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={handleNavClick}
              >
                Reviews
              </Link>
              <Link
                to="/#faq"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={handleNavClick}
              >
                FAQ
              </Link>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors"
                onClick={handleNavClick}
              >
                Free Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
