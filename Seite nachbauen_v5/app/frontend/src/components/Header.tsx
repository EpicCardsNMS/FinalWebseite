import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Startseite", path: "/" },
    { label: "Preise", path: "/preise" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/assets/logos/epiccards-logo.jpg"
              alt="EpicCards Logo"
              className="w-14 h-14 rounded-xl object-contain shadow-lg group-hover:shadow-white/20 transition-shadow"
            />
            <span className="text-lg font-bold text-white hidden sm:block">
              EpicCards
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              className="ml-2 px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 hover:shadow-white/20"
            >
              Karten verkaufen
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menü"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-white bg-white/10"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block text-center mx-3 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm"
            >
              Karten verkaufen
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}