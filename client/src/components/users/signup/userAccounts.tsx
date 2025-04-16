import { MdDelete } from "react-icons/md";;

// here define UserAccount Remove functional component
const UserAccounts: React.FC = () => {
    return (
        <>
            <a className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className="shrink-0">
                    <div className="w-10 h-10 overflow-hidden">
                        <MdDelete className="w-8 h-12 text-sm text-gray-400 p-[2px] mx-1" />
                    </div>
                </span>
                <span className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium truncate text-gray-800 dark:text-black">
                        Delete Account
                    </p>
                </span>
            </a>
        </>
    );
}

// export UserAccount component
export default UserAccounts;
