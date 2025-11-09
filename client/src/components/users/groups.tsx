import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import { useSettingUserContext } from "../hooks/contexts/userSettingContexts.ts";
import { useUserLogoutModalContext } from "../hooks/contexts/userSignupContext.ts";
import { useUserProfileContexts } from "../hooks/contexts/userProfileContext.ts";
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
// import EmptyContent from "./contents/emptyContent.tsx";

// Groups component of user groups chat
const Groups: React.FC = () => {
  // here was declare some custom hooks
  const { isAccounts }: any = useSettingUserContext();
  const { isLogoutModal }: any = useUserLogoutModalContext();
  const { isUserProfileView, isUserProfileEdit, isUserRemove }: any =
    useUserProfileContexts();

  // here was declare heading variables of Groups
  const headingTitle: string = "Groups";

  return (
    <>
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-8">
        {/* start section for groups chat user list content */}
        <section className="col-span-1 w-full h-[668px] border lg:col-span-3">
          {!isAccounts ? (
            <div>
              <div>
                <Headings headingTitle={headingTitle} />
              </div>
              <div className="bg-slate-50">
                <SearchBars />
                <ContentLists />
              </div>
            </div>
          ) : (
            <div>
              {!isUserProfileView ? (
                <div>
                  {/* <Accessabilities /> */}
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
        <section className="col-span-1 border w-full h-[668px] lg:col-span-5">
          <div>
            <div>
              <MessagesHeading />
            </div>

            {/* start div for sender and reciever messages content of groups chat */}
            <div className="w-full h-[530px]">
              <div className="flex gap-4 bg-slate-100 p-4 w-full h-full flex-col">
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
        </section>
        {/* end section */}
      </div>

      <div>
        {isLogoutModal && <UserLogout />}
        {isUserProfileEdit && <UserEditProfile />}
        {isUserRemove && <UserRemoveModal />}
      </div>
    </>
  );
};

// exporting the groups component
export default Groups;
