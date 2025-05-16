import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "../../ui/input.tsx";
import { Button } from "../../ui/button.tsx";

// here was SearchBars component
const SearchBars: React.FC = () => {
  // declare useState hook
  const [searchInfo, setSearchInfo] = useState<string>("");

  // here define search action function
  const handleSearched = (e: any) => {
    e.preventDefault();
    console.log(searchInfo);
  };

  return (
    <>
      {/* start search form */}
      <form
        onSubmit={handleSearched}
        className="flex items-center max-w-lg mx-auto"
      >
        <Input
          type="text"
          name="searchInfo"
          value={searchInfo}
          onChange={(e: any) => setSearchInfo(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg 
          focus:ring-gray-500 focus:border-gray-500 block h-10 md:h-12 w-full ps-10 p-2.5 dark:bg-gray-700 
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 
          dark:focus:border-gray-500"
          placeholder="Search..."
        />
        <Button
          type="submit"
          className="h-10 w-10 md:h-12 md:w-12 p-2.5 ms-2 text-sm md:text-xl mb-1 
          font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
          focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg transition-colors"
        >
          <IoSearch className="w-2 h-2 md:w-5 md:h-5 mx-auto" />
        </Button>
      </form>
      {/* end search form */}
    </>
  );
};
// export Searchbars component
export default SearchBars;
