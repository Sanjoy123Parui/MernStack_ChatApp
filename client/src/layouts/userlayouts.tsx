import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from '../components/users/headers/userheader.tsx';

// Here was define user layout component functionality
const Userlayout = () => {

    return (
        <>
            {/* headers component */}
            <UserHeader />

            {/* start main */}
            <main className="bg-gray-300">
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            {/* end main */}
        </>
    );
}

export default Userlayout;