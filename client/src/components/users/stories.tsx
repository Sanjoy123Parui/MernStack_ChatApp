import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import SearchBars from "./contents/searchBars.tsx";
import Userprofileaccessories from "./profiles/userprofileaccessories.tsx";
import {
  useSettingUserContext,
  useUserSettingToggleContext,
} from "../hooks/contexts/userSettingContexts.ts";
import { useUserLogoutModalContext } from "../hooks/contexts/userSignupContext.ts";
import { useUserProfileContexts } from "../hooks/contexts/userProfileContext.ts";
import UserViewProfile from "./profiles/userViewProfile.tsx";
import UserLogout from "../modals/userLogout.tsx";
import UserRemoveModal from "../modals/userRemoveModal.tsx";
import UserEditProfile from "../modals/userEditProfile.tsx";
import EmptyContent from "./contents/emptyContent.tsx";

// define Stories functional component
const Stories: React.FC = () => {
  // here was declare heading variables of Stories
  const headingTitle: string = "Stories";

  // declare custom hooks for handle data
  const { isAccounts }: any = useSettingUserContext();
  const { isThemes }: any = useUserSettingToggleContext();
  const { isLogoutModal }: any = useUserLogoutModalContext();
  const { isUserProfileView, isUserProfileEdit, isUserRemove }: any =
    useUserProfileContexts();

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
      {/* start div grid-layout */}
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-8">
        {/* start section for user stories list content */}
        {/* <section className="col-span-1 w-full h-[668px] border lg:col-span-3"> */}
        <section
          className={`col-span-1 w-full ${
            !isThemes ? `bg-slate-50` : `bg-gray-800`
          } h-[668px] border-r-2 lg:col-span-3`}
        >
          {!isAccounts ? (
            <div>
              <div>
                <Headings headingTitle={headingTitle} />
              </div>
              <div>
                <SearchBars />
                <ContentLists />
              </div>
            </div>
          ) : (
            <div>
              {!isUserProfileView ? (
                <div>
                  <Userprofileaccessories />
                </div>
              ) : (
                <div>
                  <UserViewProfile />
                </div>
              )}
            </div>
          )}
        </section>
        {/* end section */}

        {/* start section for user stories view content */}
        <section
          className={`col-span-1 w-full ${
            !isThemes ? `bg-slate-50` : `bg-gray-800`
          } h-[668px] border-l-0 lg:col-span-5`}
        >
          <div>
            <EmptyContent />
          </div>
        </section>
        {/* end section */}

        <div>
          {isLogoutModal && <UserLogout />}
          {isUserProfileEdit && <UserEditProfile />}
          {isUserRemove && <UserRemoveModal />}
        </div>
      </div>
    </>
  );
};

// export Stories component
export default Stories;
