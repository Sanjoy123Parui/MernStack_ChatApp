import { IoSearch } from "react-icons/io5";

// here was SearchBars component
const SearchBars: React.FC = () => {
  return (
    <>
      {/* start searchbar content */}
      <form className="flex items-center max-w-lg mx-auto">
        <div className="w-full">
          <input
            type="text"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm md:text-base rounded-lg 
            focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5  
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search chats...."
          />
        </div>
        <button
          type="button"
          className="p-2.5 ms-2 text-sm md:text-xl mb-1
          font-medium text-white bg-blue-700 rounded-lg border border-blue-700 
          hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <IoSearch />
        </button>
      </form>
      {/* end searchbar */}
    </>
  );
};
// export Searchbars component
export default SearchBars;
