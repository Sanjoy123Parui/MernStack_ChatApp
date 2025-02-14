import { IoSearch } from "react-icons/io5";
// here define Search content functional component
const SearchContent: React.FC = () => {
  return (
    <>
      {/* start searchbar content */}
      <form className="flex items-center max-w-md mx-auto">
        <div className="relative w-full">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg 
            focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5  
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search chats...."
          />
        </div>
        <button
          type="button"
          className="p-2.5 ms-2 text-sm md:text-xl mb-1
          font-medium text-white bg-gray-700 rounded-lg border border-gray-700 
          hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <IoSearch />
        </button>
      </form>
      {/* end searchbar */}
    </>
  );
};

// export SearchContent component
export default SearchContent;
