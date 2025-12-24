import { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { userContactHeadingItems } from "../../../models/userModel.ts";
import { useUserContactActionContext } from "../../../hooks/contexts/userContactContext.ts";

// declare Contactheadings component
const Contactheadings: React.FC<userContactHeadingItems> = ({
  userContactHeading,
}) => {
  // declare custom hooks for manage state value
  const { hideContacts }: any = useUserContactActionContext();

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
      <div className="bg-purple-600 shadow-md py-3 lg:py-4">
        <div className="mb-0 px-8">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* start div for redirect back action button content */}
            <div className="contents">
              <a
                onClick={hideContacts}
                className="text-white text-lg mr-1 flex lg:text-2xl font-bold"
              >
                <GoArrowLeft className="w-5 h-5" />
              </a>
            </div>
            {/* end div */}

            {/* start div for heading content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-white text-lg lg:text-2xl font-bold">
                {userContactHeading}
              </h1>
            </div>
            {/* end div */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactheadings;
