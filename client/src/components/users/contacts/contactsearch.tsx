import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "../../ui/input.tsx";

const Contactsearch: React.FC = () => {
  // declare useState search contact
  const [contactSearch, setContactSearch] = useState<string>("");

  //define searchContact function
  const handleContactSearch = (e: any) => {
    setContactSearch(e.target.value);
  };

  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    if (contactSearch.length >= 3) {
      console.log(contactSearch);
    }

    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [contactSearch]);

  return (
    <>
      <div className="p-4 shadow">
        {/* start contact search form */}
        <form className="flex items-center max-w-lg mx-auto">
          <div className="relative w-full">
            <Input
              type="text"
              name="contactSearch"
              value={contactSearch}
              onChange={handleContactSearch}
              className={`bg-gray-50 border border-gray-300 text-gray-900 
              text-sm md:text-base rounded-lg 
              focus:ring-gray-500 focus:border-gray-500 block h-10 md:h-12 w-full 
              ps-4 pr-10 p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 
              dark:focus:border-gray-500`}
              placeholder="Search Contact..."
            />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-2 h-2 md:w-5 md:h-5 dark:text-gray-400 mx-auto" />
          </div>
        </form>
        {/* end form */}
      </div>
    </>
  );
};

export default Contactsearch;
