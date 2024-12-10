import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Headers from '../users/headers/userheader.tsx';


// here define userLayout functionality
const Userlayout: React.FC = () => {

    return (
        <>
            {/* It is a headers component */}
            <Headers />

            {/* start main */}
            <main>
                <Suspense>
                    {/* here all component loaded after header */}
                    <Outlet />
                </Suspense>
            </main>
            {/* end main */}
        </>
    );
}

// export user layout
export default Userlayout;