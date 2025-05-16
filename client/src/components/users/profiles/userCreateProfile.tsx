// here import packages of libraies
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// here import components
import ProfileCreateForm from "../../forms/profileCreateForm.tsx";
import { profileFormdata } from "../../models/profileModel.ts";
import { createProfileValidatorSchema } from "../../validations/profileValidator.ts";

// define userCreate functional component
const UserCreateProfile: React.FC = () => {
  // here declare useNavigate hook
  const navigate: any = useNavigate();

  // declare useform hook for  handle user profile form
  const form: any = useForm<profileFormdata>({
    resolver: zodResolver(createProfileValidatorSchema),
    defaultValues: {
      full_name: "",
      avatar: "",
      gender: "",
      dob: "",
      abouts: "",
    },
  });

  // here was declare useNavigate hook

  // here declare  submit profile form function with submitHandler hook
  const userhandleProfileSubmit: SubmitHandler<profileFormdata> = (
    data: any
  ) => {
    const userProfile: any = "fhgepweporiuf448866332ifuhwipefie";
    localStorage.setItem("userProfile", userProfile);
    navigate("/user/content/chat");
    console.log(data);
  };

  return (
    <>
      {/* start section content for create user profile content */}
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-8 lg:p-4 mb-auto lg:mb-12 w-full flex flex-col items-center">
              <div className="w-full max-w-lg mx-auto">
                <ProfileCreateForm
                  form={form}
                  onSubmit={form.handleSubmit(userhandleProfileSubmit)}
                />
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
