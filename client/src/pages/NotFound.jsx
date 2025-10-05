import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800">
      <div className="bg-white/90 rounded-2xl shadow-2xl px-12 py-10 flex flex-col items-center border border-indigo-200">
        <div className="text-9xl font-bold text-pink-500 drop-shadow-lg mb-2">404</div>
        <div className="text-5xl mb-4">🚫</div>
        <p className="text-2xl mt-2 text-gray-700 text-center">Oops! The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:from-pink-500 hover:to-indigo-500 transition-all text-lg font-bold"
        >
          ⬅️ Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;