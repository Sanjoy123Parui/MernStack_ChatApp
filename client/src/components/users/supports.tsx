import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SupportForm from "../forms/supportForm.tsx";
import UserLogout from "../modals/userLogout.tsx";
import { useSupportUser } from "../hooks/contentshooks.ts";
import { useUserLogoutModalContext } from "../hooks/contexts/userSignupContext.ts";

//here define Supports component
const Supports: React.FC = () => {
  // declare heading of feedback form
  const feedbackHeading: string = `Feedback or Help`;

  // destruct value for custom hooks
  const { isLogoutModal }: any = useUserLogoutModalContext();
  const { supportState, supportFormAction, supportIsPending }: any =
    useSupportUser();

  // declare some specific hooks of routes regarding
  const location: any = useLocation();

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {
      location;
    }, 1000);

    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [location]);

  return (
    <>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-8 lg:p-4 mb-auto lg:mb-12 w-full flex flex-col items-center">
              <div className="w-full max-w-lg mx-auto">
                {/* start div for technical support content */}
                <div className="bg-white border-[1px] shadow-xl rounded-2xl px-8 pt-6 md:p-16 mt-0 lg:mt-4 -mx-0 lg:-mx-32 pb-8 mb-4">
                  {/* heading of support form */}
                  <h1 className="text-xl lg:text-3xl text-center font-bold text-blue-950 mb-8">
                    {feedbackHeading}
                  </h1>

                  {/* here can loaded SUpportForm component */}
                  <SupportForm
                    supportState={supportState}
                    supportFormAction={supportFormAction}
                    supportIsPending={supportIsPending}
                  />
                </div>
                {/* end div */}
              </div>
            </div>
          </div>
        </div>

        <div>{isLogoutModal && <UserLogout />}</div>
      </section>
    </>
  );
};
// exporting Supports component
export default Supports;
