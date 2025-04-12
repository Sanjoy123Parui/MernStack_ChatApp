import { FiLogOut } from "react-icons/fi";

const UserProfileNav: React.FC = () => {
    return (
        <>

            <li className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
                <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-2 lg:space-y-0 lg:space-x-4">
                    <a className="flex text-gray-600 lg:text-white hover:text-black lg:hover:text-gray-300 transition-colors">
                        <p className="flex lg:hidden">Logout</p>
                        <p className="mt-1.5"><FiLogOut /></p>
                    </a>
                </div>
            </li>

        </>
    )
}

export default UserProfileNav
