import { useEffect } from "react";
// import { contentHeading } from "../../models/contentModel.ts";
import { contentHeading } from "../../../models/contentModel.ts";

// here define heading functional component
const Headings: React.FC<contentHeading> = ({ headingTitle }) => {
  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);
    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
    </>
  );
};
// export Headings component
export default Headings;
