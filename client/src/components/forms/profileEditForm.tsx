// Consume to the importing some module of profile edit form component
import { useEffect } from "react";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
// import { editProfileFormProps } from "../models/profileModel.ts";
import { editProfileFormProps } from "../../models/profileModel.ts";

interface updateProfileContent extends editProfileFormProps {
  closeUserEdit: () => void;
}

/* here define ProfileEditForm functional component */
const ProfileEditForm: React.FC<updateProfileContent> = ({
  editState,
  editFormAction,
  editIsPending,
  closeUserEdit,
}) => {
  // here destruct custom hooks data
  const { success, errors }: any = editState;

  // here define function for getValidation error of edit profile form
  const getUpdateErrors = (fieldName: any) => errors?.[fieldName] || "";

  // declare formFields array
  const formFields: any = [
    { fLabel: "First Name", fType: "text", fName: "first_name" },
    { fLabel: "Last Name", fType: "text", fName: "last_name" },
    { fLabel: "D.O.B", fType: "date", fName: "dob" },
    { fLabel: "Gender", fType: "radio", fName: "gender" },
    { fLabel: "Abouts", fType: "textarea", fName: "abouts" },
  ];

  // declare genderOptions
  const genderOptions: any = ["Male", "Female", "Other"];

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);
    if (success) {
      console.log(editState);
      closeUserEdit();
    }
    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [success, editState, closeUserEdit]);

  return (
    <>
      <form
        action={(formData: FormData) => {
          editFormAction(formData);
        }}
        className="space-y-4 sm:space-y-6"
      >
        {/* start div for modal body */}
        <div className="p-4">
          {/* start div for first_name + last_name field */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formFields.slice(0, 2).map((field: any, i: any) => {
              const { fLabel, fType, fName }: any = field;

              return (
                <div key={i} className="relative mb-3">
                  {fType === "text" && (
                    <>
                      <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        {fLabel}
                      </Label>
                      <div className="relative">
                        <Input
                          type={fType}
                          name={fName}
                          className={`bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white${
                            getUpdateErrors(fName)
                              ? `border border-red-300 dark:border-red-600 
                 focus:ring-pink-500 focus:border-pink-500`
                              : `border border-gray-300 dark:border-gray-600 
                 focus:ring-blue-500 focus:border-blue-500`
                          }
             text-sm sm:text-base md:text-lg rounded-lg block w-full p-2.5 sm:p-3`}
                        />
                      </div>
                      {getUpdateErrors(fName) && (
                        <p className="text-red-500 text-sm lg:text-base">
                          {getUpdateErrors(fName)}
                        </p>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
          {/* end div */}

          {/* start div for dob,gender,abouts */}
          <div className="flex flex-col">
            {formFields.slice(2).map((field: any, i: any) => {
              const { fLabel, fType, fName }: any = field;

              return (
                <div key={i} className="relative mb-3">
                  {fType === "date" && (
                    <>
                      <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        {fLabel}
                      </Label>
                      <div className="relative">
                        <Input
                          type={fType}
                          name={fName}
                          className={`bg-gray-50 dark:bg-gray-700 
                            text-gray-900 dark:text-white
                              ${
                                getUpdateErrors(fName)
                                  ? `border border-red-300 dark:border-red-600 
                  focus:ring-pink-500 focus:border-pink-500`
                                  : `border border-gray-300 dark:border-gray-600 
                  focus:ring-blue-500 focus:border-blue-500`
                              }
              text-sm sm:text-base md:text-lg rounded-lg block 
              w-full p-2.5 sm:p-3`}
                        />
                      </div>
                      {getUpdateErrors(fName) && (
                        <p className="text-red-500 text-sm lg:text-base">
                          {getUpdateErrors(fName)}
                        </p>
                      )}
                    </>
                  )}

                  {fType === "radio" && (
                    <>
                      <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        {fLabel}
                      </Label>
                      <RadioGroup
                        name={fName}
                        className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0"
                      >
                        {genderOptions.map((gen: any, j: any) => (
                          <div key={j} className="flex items-center space-x-3">
                            <RadioGroupItem value={gen} />
                            <Label className="text-sm sm:text-base md:text-lg">
                              {gen}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {getUpdateErrors(fName) && (
                        <p className="text-red-500 text-sm lg:text-base">
                          {getUpdateErrors(fName)}
                        </p>
                      )}
                    </>
                  )}

                  {fType === "textarea" && (
                    <>
                      <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                        {fLabel}
                      </Label>
                      <div className="relative">
                        <Textarea
                          name={fName}
                          className={`bg-gray-50 dark:bg-gray-700 
                            text-gray-900 dark:text-white
              ${
                getUpdateErrors(fName)
                  ? `border border-red-300 dark:border-red-600 
                  focus:ring-pink-500 focus:border-pink-500`
                  : `border border-gray-300 dark:border-gray-600 
                  focus:ring-blue-500 focus:border-blue-500`
              }
              text-sm sm:text-base md:text-lg rounded-lg 
              block w-full p-2.5 sm:p-3`}
                        />
                      </div>
                      {getUpdateErrors(fName) && (
                        <p className="text-red-500 text-sm lg:text-bas">
                          {getUpdateErrors(fName)}
                        </p>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
          {/* end div */}
        </div>
        {/* end div */}

        {/* start div for modal-footer */}
        <div className="flex items-center p-4  border-t border-gray-200 dark:border-gray-600">
          {/* start div for save profile button */}
          <div className="w-full h-10 sm:h-12 md:h-14">
            <Button
              type="submit"
              disabled={editIsPending}
              className={`w-full h-10 sm:h-12 md:h-14 bg-gradient-to-r 
              from-green-400 via-green-500 
          to-green-600 hover:bg-gradient-to-br focus:ring-4 
          focus:ring-green-300 dark:focus:ring-green-800 font-medium 
          rounded-lg text-sm sm:text-base md:text-lg text-white px-4 py-2`}
            >
              {editIsPending ? "Loading..." : "Save"}
            </Button>
          </div>
          {/* end div */}
        </div>
        {/* end div */}
      </form>
    </>
  );
};

/* exporting ProfileEditForm component */
export default ProfileEditForm;
