import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import {
  useSettingUserContext,
  useUserSettingToggleContext,
} from "../../hooks/contexts/userSettingContexts.ts";
import { useUserChatContentToggleContext } from "../../hooks/contexts/userContentContext.ts";
import { useUserLogoutModalContext } from "../../hooks/contexts/userSignupContext.ts";
import { useUserProfileContexts } from "../../hooks/contexts/userProfileContext.ts";
import Userprofileaccessories from "./profiles/userprofileaccessories.tsx";
import UserViewProfile from "./profiles/userViewProfile.tsx";
import MessagesHeading from "./contents/messagesHeading.tsx";
import Sender from "./contents/sender.tsx";
import Reciever from "./contents/reciever.tsx";
import Conversations from "./contents/conversations.tsx";
import UserLogout from "../modals/userLogout.tsx";
import UserEditProfile from "../modals/userEditProfile.tsx";
import UserRemoveModal from "../modals/userRemoveModal.tsx";
import SearchBars from "./contents/searchBars.tsx";
import Contentoptions from "./contents/contentoptions.tsx";
// import EmptyContent from "./contents/emptyContent.tsx";

// Groups component of user groups chat
const Groups: React.FC = () => {
  // here was declare heading variables of Groups
  const headingTitle: string = "Groups";
  const groupsHeading: string = "Coder gang";

  // declare list of options are messageheadingOptions
  const messagesheadingOptions: any = [
    "View Profile",
    "Block",
    "Report",
    "Mute",
    "Left Groups",
    "Create Admin",
    "Add members",
    "Clear All",
    "Close chat",
  ];

  // here was declare some custom hooks
  const { isAccounts }: any = useSettingUserContext();
  const { isThemes }: any = useUserSettingToggleContext();
  const { isLogoutModal }: any = useUserLogoutModalContext();
  const { isUserProfileView, isUserProfileEdit, isUserRemove }: any =
    useUserProfileContexts();
  const {
    isGroupsOptions,
    showGroupsContentOptions,
    hideGroupsContentOptions,
  }: any = useUserChatContentToggleContext();

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
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-8">
        {/* start section for groups chat user list content */}
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

        {/* start section for groups chat conversation content */}
        <section
          className={`col-span-1 w-full ${
            !isThemes ? `bg-slate-50` : `bg-gray-800`
          } h-[668px] border-l-0 lg:col-span-5`}
        >
          <div>
            <div>
              <MessagesHeading
                headingTitle={groupsHeading}
                showOptionAction={showGroupsContentOptions}
              />
            </div>

            {/* start div for sender and reciever messages content of groups chat */}
            <div className="w-full h-[530px]">
              <div className="flex gap-4 p-4 w-full h-full flex-col">
                <Sender />
                <Reciever />
              </div>
            </div>
            {/* end div */}

            <div>
              <Conversations />
            </div>
          </div>

          {/* <div className="bg-slate-50">
            <EmptyContent />
          </div> */}

          {isGroupsOptions === true && (
            <Contentoptions
              messagesheadingOptions={messagesheadingOptions}
              hideOptionAction={hideGroupsContentOptions}
            />
          )}
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

// exporting the groups component
export default Groups;
