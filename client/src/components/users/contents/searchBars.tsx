import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "../../ui/input.tsx";
import { Button } from "../../ui/button.tsx";

// here was SearchBars component
const SearchBars: React.FC = () => {
  // here declare useState hooks
  const [searchData, setSearchData] = useState<string>("");

  // here define searchAction function
  const handleSearchAction = (e: any) => {
    e.preventDefault();
    console.log(searchData);
  };

  return (
    <>
      {/* start searchbar content */}
      <form
        onSubmit={handleSearchAction}
        className="flex items-center max-w-lg mx-auto"
      >
        <Input
          type="text"
          name="searchData"
          onChange={(e: any) => setSearchData(e.target.value)}
          value={searchData}
          className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm md:text-base rounded-lg 
            focus:ring-gray-500 focus:border-gray-500 block h-1/4 w-full ps-10 p-2.5  
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-gray-500 dark:focus:border-gray-500"
          placeholder="Search chats...."
        />
        <Button
          type="submit"
          className="p-2.5 ms-2 text-sm md:text-xl mb-1
          font-medium text-white bg-blue-700 rounded-lg h-[30%] w-auto border border-blue-700 
          hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <IoSearch />
        </Button>
      </form>
      {/* end searchbar */}
    </>
  );
};
// export Searchbars component
export default SearchBars;
