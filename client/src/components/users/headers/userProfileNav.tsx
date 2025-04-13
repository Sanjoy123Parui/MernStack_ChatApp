import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import UserLogout from "../signup/userLogout.tsx";

const UserProfileNav: React.FC = () => {

    // here was declare useState hooks
    const [isUserprofilelogoutModal, setIsUserprofilelogoutModal] = useState<any>(false);

    // here was define open modal of user logout in profile form component
    const handleUserProfilelogout = () => {
        setIsUserprofilelogoutModal(true);
    }

    // here was define userLogout modal close
    const onUserLogoutModal = () => {
        setIsUserprofilelogoutModal(false);
    }

    // here was define userLogout  cancel
    const onUserLogoutCancel = () => {
        setIsUserprofilelogoutModal(false);
    }

    return (
        <>

            <li className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
                <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-2 lg:space-y-0 lg:space-x-4">
                    <a onClick={handleUserProfilelogout} className="flex text-gray-600 lg:text-white hover:text-black lg:hover:text-gray-300 transition-colors">
                        <p className="flex lg:hidden">Logout</p>
                        <p className="mt-1.5"><FiLogOut /></p>
                    </a>
                </div>
            </li>

            {isUserprofilelogoutModal && (
                <div>
                    <UserLogout onUserLogoutModal={onUserLogoutModal} onUserLogoutCancel={onUserLogoutCancel} />
                </div>
            )}

        </>
    )
}

export default UserProfileNav
