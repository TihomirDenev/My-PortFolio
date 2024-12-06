import notFoundImage from "../../assets/Additional/notFound.png";
import { NavLink } from "react-router-dom";

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
        We can not find the page you are looking for.
      </p>

      <NavLink to="/" className="btn btn-accent text-lg">
        Go Home
      </NavLink>
    </div>
  );
}
