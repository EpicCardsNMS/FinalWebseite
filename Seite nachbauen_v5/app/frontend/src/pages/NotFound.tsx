import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-white">
          404
        </h1>
        <p className="text-xl text-neutral-500">Seite nicht gefunden</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all"
        >
          <Home className="w-4 h-4" />
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}