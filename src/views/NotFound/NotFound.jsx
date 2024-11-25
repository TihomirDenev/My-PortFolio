import { Link } from "react-router-dom";
import notFoundImage from "../../assets/notFound.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center my-10 gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Oops! Page not found.
      </h1>

      <img
        src={notFoundImage}
        alt="Page Not Found"
        className="w-full max-w-md mx-auto"
      />

      <p className="text-lg text-center">
        We can't find the page you're looking for.
      </p>

      <Link to="/" className="btn btn-primary text-lg">
        Go Home
      </Link>
    </div>
  );
}
