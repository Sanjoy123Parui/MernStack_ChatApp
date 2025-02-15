import { IoSearch } from "react-icons/io5";

// here define Searchbar component
const SearchBar: React.FC = () => {
  return (
    <>
      {/* start searchbar content */}
      <form className="flex items-center max-w-lg mx-auto">
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

// define ListHeading functional component
const ListHeading: React.FC = () => {
  return (
    <>
      {/* start div for chatList heading */}
      <div className="bg-purple-600 py-3 lg:py-4">
        <div className="mb-0 px-8">
          <h1 className="text-white text-lg lg:text-2xl font-bold">Chats</h1>
        </div>
      </div>
      {/* end div */}

      {/* start div for loading searchBar component */}
      <div className="p-4">
        <SearchBar />
      </div>
      {/* end div */}
    </>
  );
};
// export list heading functional component
export default ListHeading;
