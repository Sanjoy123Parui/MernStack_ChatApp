import { Link } from "react-router-dom";
import { isOpenheaderProps } from '../../models/userModel.ts';

// here define userSignupNav functional component
const UserSignupNav: React.FC<isOpenheaderProps> = ({ isOpen }) => {

    // here declare nav list items
    let signupList: any[] = [
        { listItems: 'Login', itemsPath: '/login' },
        { listItems: 'Register', itemsPath: '/user/Register' }
    ];

    return (
        <>
            {/* start ul for nav link */}
            <ul className={`${isOpen ? "block" : "hidden"}  md:flex absolute md:relative rounded-2xl sm:shadow-lg md:rounded-none  h-60 bg-slate-100 md:bg-transparent w-48 md:w-auto md:h-auto right-0 top-full md:top-auto p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>

                {signupList.map((items: any, index: any) => {
                    return (
                        <li key={index} className=" mx-6 md:mx-auto p-[5px] md:p-0 md:text-right">
                            <Link to={items.itemsPath} className="block text-black md:text-white hover:text-yellow-400 md:hover:text-gray-300 transition-colors">
                                {items.listItems}
                            </Link>
                        </li>
                    );
                })}

            </ul>
            {/* end ul */}
        </>
    );
}

// export UserSigupNav functional component
export default UserSignupNav;