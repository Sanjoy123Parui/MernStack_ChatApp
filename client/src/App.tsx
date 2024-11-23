import { RouterProvider } from "react-router-dom";
import { routerPath } from "./layouts/routelayout.tsx";
import './App.css';

const App = () => {

  return (
    <>
      <RouterProvider router={routerPath} />
    </>
  );

}

export default App;