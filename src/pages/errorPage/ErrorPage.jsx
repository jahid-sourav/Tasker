import { Link } from "react-router-dom";
import ErrorImage from "../../assets/404.webp";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <img src={ErrorImage} alt="ERROR" />
        </div>
        <Link to="/" className="px-3 py-2 bg-green-800 text-white rounded-md">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
