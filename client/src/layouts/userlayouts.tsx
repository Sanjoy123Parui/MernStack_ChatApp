import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Headers from '../components/users/headers/headers.tsx';

// Here was define user layout component functionality
const Userlayout = () => {

    return (
        <>
            {/* headers component */}
            <Headers/>

            {/* start main */}
            <main>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </main>
            {/* end main */}

        </>
    );
}

export default Userlayout;