import { contentHeading } from "../../models/contentModel.tsx";
import SearchBars from "./searchBars.tsx";

// here define heading functional component
const Headings: React.FC<contentHeading> = ({ headingTitle }) => {
  return (
    <>
      {/* start div for contentList heading */}
      <div className="bg-purple-600 shadow-md py-3 lg:py-4">
        <div className="mb-0 px-8">
          <h1 className="text-white text-lg lg:text-2xl font-bold">
            {headingTitle}
          </h1>
        </div>
      </div>
      {/* end div */}
      {/* start div for SearchBar components loaded */}
      <div className="p-4 shadow">
        <SearchBars />
      </div>
      {/* end div */}
    </>
  );
};
// export Headings component
export default Headings;
