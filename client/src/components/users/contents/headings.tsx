import SearchBars from "./searchBars.tsx";
import ContentLists from "./contentLists.tsx";

// here define heading functional component
const Headings = () => {
  return (
    <>
      {/* start div for contentList heading */}
      <div className="bg-purple-600 py-3 lg:py-4">
        <div className="mb-0 px-8">
          <h1 className="text-white text-lg lg:text-2xl font-bold">Chats</h1>
        </div>
      </div>
      {/* end div */}

      {/* start div for loading searchBar component */}
      <div className="p-4">
        <SearchBars />
      </div>
      {/* end div */}

      {/* start div for loading contentLists  */}
      <div>
        <ContentLists />
      </div>
      {/* end div */}
    </>
  );
};
// export Headings component
export default Headings;
