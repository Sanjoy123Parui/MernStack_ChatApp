import { isOpenheaderProps } from "@/components/models/userModel";
import { FiLogOut } from "react-icons/fi";

const UserProfileNav: React.FC<isOpenheaderProps> = ({ isOpen }) => {
    return (
        <>
            {/* start list content */}
            <ul className={`lg:flex ${isOpen ? "block" : "hidden"
                } absolute lg:relative rounded-2xl shadow-lg lg:shadow-none lg:rounded-none  
            h-auto bg-slate-100 lg:bg-transparent w-48 lg:w-auto text-base lg:text-lg lg:h-auto right-0 top-full 
            lg:top-auto p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4`}>
                <li className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-2 lg:space-y-0 lg:space-x-4">
                        <a className="flex text-gray-600 lg:text-white hover:text-black lg:hover:text-gray-300 transition-colors">
                            <p className="flex lg:hidden">Logout</p>
                            <p className="mt-1.5"><FiLogOut /></p>
                        </a>
                    </div>
                </li>
            </ul>
            {/* end list content */}
        </>
    )
}

export default UserProfileNav
