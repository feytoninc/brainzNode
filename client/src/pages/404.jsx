import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="txt-3xl flex text-center align-items-center justify-center h-screen flex-col">
      <h3 className="text-3xl font-bold my-2">Not found</h3>
      <p className="my-2">...Oopps. The page you are looking is not available</p>
      <Link to="/" className="rounded-lg py-2 px-4 bg-gray-300">
        Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
