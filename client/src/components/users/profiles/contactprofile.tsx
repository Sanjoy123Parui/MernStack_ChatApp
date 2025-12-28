import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Contactprofileoptions from "../contacts/contactprofileoptions.tsx";
import Contactprofileadditional from "../contacts/contactprofileadditional.tsx";
import { useUserContactActionContext } from "../../../hooks/contexts/userContactContext.ts";
import { useUserSettingToggleContext } from "../../../hooks/contexts/userSettingContexts.ts";

// define Contactprofile component
const Contactprofile: React.FC = () => {
  // declare custom hooks to destruct data
  const { hideContactProfile }: any = useUserContactActionContext();
  const { isThemes }: any = useUserSettingToggleContext();

  // declare contact profile detailes
  const first_name: string = `John`;
  const last_name: string = `Doe`;
  const fullName: any = first_name + " " + last_name;
  const phone: string = `+91-9763155564`;

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    // here was component will unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <section
        className={`px-6 pt-4 pb-8 max-w-lg mx-auto
          ${!isThemes ? `bg-slate-50` : `bg-gray-800`} 
      lg:px-4 lg:pt-1 lg:pb-6`}
      >
        {/* start div for close button of contact user profile */}
        <div className="flex justify-end">
          <a
            onClick={hideContactProfile}
            className={`text-2xl font-semibold ${
              !isThemes
                ? `text-gray-600 hover:text-gray-800`
                : `text-slate-50 hover:text-white`
            } transition duration-200`}
          >
            <IoMdClose className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
        {/* end div */}

        {/* start div for contact profile avatar,name,phone content */}
        <div className="flex flex-col items-center text-center py-8">
          <div
            className="w-24 h-24 overflow-hidden rounded-full lg:w-32 lg:h-32 
          bg-gray-100 dark:bg-gray-600 border-2 mb-4"
          >
            <FaUser
              className="w-16 h-20 lg:w-20 lg:h-24 
              text-gray-400 mt-7 lg:mt-8 mx-4 lg:mx-[23px]"
            />
          </div>
          <h2
            className={`text-xl lg:text-2xl ${
              !isThemes ? `text-gray-700` : `text-slate-50`
            } font-medium`}
          >
            {fullName}
          </h2>
          <p
            className={`text-md md:text-lg mt-1 ${
              !isThemes ? `text-gray-700` : `text-slate-50`
            } font-medium`}
          >
            {phone}
          </p>
        </div>
        {/* end div */}

        {/* start div for contact profile additional content */}
        <div className="border-t mt-2">
          <Contactprofileadditional />
        </div>
        {/* end div */}

        {/* start div for contact profile optional settings list content */}
        <div className="border-t mt-2">
          <Contactprofileoptions />
        </div>
        {/* end div */}
      </section>
    </>
  );
};
// exporting Contactprofile component
export default Contactprofile;
