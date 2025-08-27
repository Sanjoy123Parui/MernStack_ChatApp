import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Notfound: React.FC = () => {
  let statusCode: string = "404";
  let title: string = `Oops! Page Not Found`;
  let description: string = `It seems you've ventured into uncharted territory. The page you're
  looking for doesn't exist.`;

  let message: string = `You can always find your way back.`;

  // useNaviagte hook declare
  const navigate: any = useNavigate();

  // define function for redirect to home page
  const goHome = () => navigate("/");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-800 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-wider animate-pulse">
          {statusCode}
        </h1>
        <h2 className="text-4xl font-semibold mt-4 mb-2">{title}</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">{description}</p>
        <Button
          onClick={goHome}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Go Back Home
        </Button>
      </div>
      <div className="absolute bottom-4 text-gray-500 text-sm">{message}</div>
    </div>
  );
};

export default Notfound;
