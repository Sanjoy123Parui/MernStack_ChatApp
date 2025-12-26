import { useEffect } from "react";
import { useUserSettingToggleContext } from "../../../hooks/contexts/userSettingContexts.ts";

// define Contactprofileadditional component
const Contactprofileadditional: React.FC = () => {
  // declare custom hooks to destruct data
  const { isThemes }: any = useUserSettingToggleContext();

  // declare variables for additional
  const contactInfo: any = [
    {
      heading: "Abouts",
      content: `Hey there! I am using chat App`,
    },
    {
      heading: "Gender",
      content: `Male`,
    },
    {
      heading: "Date Of Birth",
      content: `07-08-1999`,
    },
  ];

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    // here was component will unmount with cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <ul
        className={`p-4 ${
          !isThemes ? `text-gray-700` : `text-slate-50`
        } space-y-4`}
      >
        {contactInfo.map((items: any, i: any) => (
          <li key={i} className="py-2">
            <h4 className="font-bold text-sm lg:text-lg">{items.heading}</h4>
            <p className="mt-1 font-medium text-sm md:text-base">
              {items.content}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
// exporting Contactprofileadditional component
export default Contactprofileadditional;
