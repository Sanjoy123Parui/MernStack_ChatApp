import ProfileCreateForm from "../../forms/profileCreateForm.tsx";
import { useCreateUserContext } from "../../hooks/contexts/userProfileContext.ts";


// define userCreate functional component
const UserCreateProfile: React.FC = () => {

  // here destruct datat form user create profile context
  const { stateValues, formAction, isPending }: any = useCreateUserContext();

  return (
    <>
      {/* start section content for create user profile content */}
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-8 lg:p-4 mb-auto lg:mb-12 w-full flex flex-col items-center">
              <div className="w-full max-w-lg mx-auto">

                {/* loaded ProfileCreateForm component */}
                <ProfileCreateForm stateValues={stateValues} formAction={formAction} isPending={isPending} />

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
    </>
  );
};

// here export UserCreate functional component
export default UserCreateProfile;
