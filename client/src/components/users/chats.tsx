import Headings from "./contents/headings.tsx";
import ContentLists from "./contents/contentLists.tsx";
import MessagesHeading from "./contents/messagesHeading.tsx";
import Messages from "./contents/messages.tsx";
import Conversations from "./contents/conversations.tsx";
import Accessabilities from "./profiles/accessabilities.tsx";
import { useSettingUserContext } from "../hooks/contexts/userSettingContexts.ts";
import { useUserLogoutModalContext } from "../hooks/contexts/userSignupContext.ts";
import { useUserProfileContexts } from "../hooks/contexts/userProfileContext.ts";
import UserViewProfile from "./profiles/userViewProfile.tsx";
import UserLogout from "../modals/userLogout.tsx";
import UserRemoveModal from "../modals/userRemoveModal.tsx";
import UserEditProfile from "../modals/userEditProfile.tsx";
// import EmptyContent from "./contents/emptyContent.tsx";

// here define Chats functional components
const Chats: React.FC = () => {
  // here was declare custom hooks
  const { isAccounts }: any = useSettingUserContext();
  const { isLogoutModal }: any = useUserLogoutModalContext();
  const { isUserProfileView, isUserProfileEdit, isUserRemove }: any =
    useUserProfileContexts();

  // here was declare heading variables of Chats
  const headingTitle: string = "Chats";

  return (
    <>
      {/* start div grid-layout */}
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-8">
        <section className="col-span-1 w-full h-[668px] border lg:col-span-3">
          {!isAccounts ? (
            <div>
              <div>
                <Headings headingTitle={headingTitle} />
              </div>
              <div className="bg-slate-50">
                <ContentLists />
              </div>
            </div>
          ) : (
            <div>
              {!isUserProfileView ? (
                <div>
                  <Accessabilities />
                </div>
              ) : (
                <div>
                  <UserViewProfile />
                </div>
              )}
            </div>
          )}
        </section>

        <section className="col-span-1 border w-full h-[668px] lg:col-span-5">
          <div>
            <div>
              <MessagesHeading />
            </div>
            <div className="w-full h-[530px]">
              <Messages />
            </div>
            <div>
              <Conversations />
            </div>
          </div>

          {/* <div className="bg-slate-50">
            <EmptyContent />
          </div> */}
        </section>
      </div>
      {/* end div */}

      <div>
        {isLogoutModal && <UserLogout />}
        {isUserProfileEdit && <UserEditProfile />}
        {isUserRemove && <UserRemoveModal />}
      </div>
    </>
  );
};
// export Chats functional components
export default Chats;
