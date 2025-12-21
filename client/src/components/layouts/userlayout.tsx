// Consume to importing some modules and lib of this component
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../users/headers/userheader.tsx";

// here define userLayout functionality
const Userlayout: React.FC = () => {
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
      {/* It is a headers component */}
      <UserHeader />

      {/* start main */}
      <main>
        <Outlet />
      </main>
      {/* end main */}
    </>
  );
};

// export user layout
export default Userlayout;
