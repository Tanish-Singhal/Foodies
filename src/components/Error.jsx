import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <Frown className="mx-auto text-black mb-4" size={60} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {err.status || "404"}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {err.statusText || "Oops! The page you're looking for doesn't exist."}
        </p>
        <Link
          to="/home"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
