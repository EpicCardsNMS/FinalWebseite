import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/1025752/2026-03-14/3fd656dc-b1a4-49b9-9b59-346b2a0fd10c.png"
              alt="EpicCards Logo"
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="text-base font-bold text-white">
              EpicCards
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Startseite
            </Link>
            <Link
              to="/preise"
              className="text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Preise
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} EpicCards — Dein Sammelkarten Ankauf
          </p>
        </div>
      </div>
    </footer>
  );
}