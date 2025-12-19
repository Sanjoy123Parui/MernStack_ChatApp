import UserLogout from "../../modals/userLogout.tsx";
import { useUserLogoutModalContext } from "../../hooks/contexts/userSignupContext.ts";
import ProfileCreateForm from "../../forms/profileCreateForm.tsx";
import { useNewUserProfile } from "../../hooks/profilehooks.ts";

// define userCreate functional component
const UserCreateProfile: React.FC = () => {
  const createProfileHeading: string = "User Profile";
  // here destruct datat form user create profile context
  const { isLogoutModal }: any = useUserLogoutModalContext();
  const { createState, createFormAction, createIsPending }: any =
    useNewUserProfile();

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-zinc-100 via-white to-indigo-50 px-2 md:px-8 py-8 md:pb-96 lg:py-8">
        <div
          className="w-full max-w-5xl bg-white border-[1.5px] border-zinc-200 rounded-3xl shadow-2xl p-0 md:p-0 flex 
        flex-col lg:flex-row overflow-hidden"
        >
          {/* start section for user create profile content*/}
          <section className="w-full flex flex-col lg:flex-row">
            {/* right: create profile form */}
            <div
              className="w-full flex items-center bg-slate-100 justify-center p-6 md:p-12 min-h-[60vh] 
            md:min-h-[70vh]"
            >
              <div
                className="w-full max-w-md md:max-w-4xl bg-white rounded-2xl 
                shadow-lg p-6 md:p-12 flex flex-col 
              justify-center mx-auto"
              >
                {/* heading of create profile form */}
                <h1 className="text-3xl text-center font-extrabold text-indigo-700 mb-8 tracking-tight drop-shadow-sm transition-all duration-300">
                  {createProfileHeading}
                </h1>

                {/* here create profile Form component */}
                <ProfileCreateForm
                  createState={createState}
                  createFormAction={createFormAction}
                  createIsPending={createIsPending}
                />
              </div>
            </div>
          </section>
          {/* end section */}
        </div>

        <div>{isLogoutModal && <UserLogout />}</div>
      </div>
    </>
  );
};

// here export UserCreate functional component
export default UserCreateProfile;
