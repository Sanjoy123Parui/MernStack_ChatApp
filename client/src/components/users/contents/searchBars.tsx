import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "../../ui/input.tsx";
// import { Button } from "../../ui/button.tsx";

// here was SearchBars component
const SearchBars: React.FC = () => {
  // declare useState hook
  const [searchInfo, setSearchInfo] = useState<string>("");

  // here define search change function
  const handleSearched = (e: any) => {
    setSearchInfo(e.target.value);
  };

  useEffect(() => {
    if (searchInfo.length >= 3) {
      console.log(searchInfo);
    }
  }, [searchInfo]);

  // const handleSearched = (e: any) => {
  //   e.preventDefault();
  //   console.log(searchInfo);
  // };

  return (
    <>
      <div className="p-4 shadow">
        {/* start search form */}
        <form className="flex items-center max-w-lg mx-auto">
          <div className="relative w-full">
            <Input
              type="text"
              name="searchInfo"
              value={searchInfo}
              onChange={handleSearched}
              className={`bg-gray-50 border border-gray-300 text-gray-900 
              text-sm md:text-base rounded-lg 
              focus:ring-gray-500 focus:border-gray-500 block h-10 md:h-12 w-full 
              ps-4 pr-10 p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 
              dark:focus:border-gray-500`}
              placeholder="Search..."
            />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-2 h-2 md:w-5 md:h-5 dark:text-gray-400 mx-auto" />
          </div>
        </form>
        {/* end search form */}
      </div>
    </>
  );
};
// export Searchbars component
export default SearchBars;
