import { Outlet } from "react-router-dom";
import UserHeader from '../users/headers/userheader.tsx';


// here define userLayout functionality
const Userlayout: React.FC = () => {

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
}

// export user layout
export default Userlayout;