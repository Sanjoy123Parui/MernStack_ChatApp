import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Userheader from "../users/headers/userheader.tsx";

// here was AppRouterlayout functional component where are render all component of this application
const AppRouterlayout: React.FC = () => {
  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {/* here was loaded Headers component */}
      <Userheader />

      {/* start main */}
      <main>
        {/* here can loaded all main components */}
        <Outlet />
      </main>
      {/* end main */}
    </>
  );
};

// exporting AppRouterlayout component
export default AppRouterlayout;
