// Consuming to the importing some modules
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import ImageCrop from "./imageCrop.tsx";
import { useProfileImageContext } from "../hooks/contexts/userContentContext.ts";
import { createProfileFormProps } from "../models/profileModel.ts";

// here define ProfileCreateForm functional component
const ProfileCreateForm: React.FC<createProfileFormProps> = ({
  createState,
  createFormAction,
  createIsPending,
}) => {
  // declare useNavigat hook for navigation route
  const navigate: any = useNavigate();

  // here destruct custom hooks data
  const { imageSrc, showCropDialog, fileName, handleFileChange }: any =
    useProfileImageContext();
  const { errors, stepper, success }: any = createState;

  // here getFieldError function define
  const getNewUserProfile = (fieldName: any) => errors?.[fieldName] || "";

  //declare formFields array
  const formFields: any = [
    {
      fLabel: "First Name",
      fType: "text",
      fName: "first_name",
      fPlaceholder: `e.g. First Name`,
    },

    {
      fLabel: "Last Name",
      fType: "text",
      fName: "last_name",
      fPlaceholder: `e.g. Last Name`,
    },

    {
      fLabel: "Profile Image",
      fType: "file",
      fName: "avatar",
      fPlaceholder: ``,
    },

    {
      fLabel: "D.O.B",
      fType: "date",
      fName: "dob",
      fPlaceholder: ``,
    },

    {
      fLabel: "Gender",
      fType: "radio",
      fName: "gender",
      fPlaceholder: ``,
    },

    {
      fLabel: "Abouts",
      fType: "textarea",
      fName: "abouts",
      fPlaceholder: `Tell us a little bit about yourself...`,
    },
  ];

  // declare genderOptions of array
  const genderOptions: any = ["Male", "Female", "Other"];

  useEffect(() => {
    if (success) {
      console.log(createState);
      navigate("/user/content/chats");
    }
  }, [success, createState, navigate]);

  return (
    <>
      {showCropDialog && imageSrc && <ImageCrop />}
      <form
        action={(formData: FormData) => createFormAction(formData)}
        className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
      >
        {/* first stepper fields */}
        {stepper === 1 && (
          <>
            {/* start div for first_name+last_name field */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {formFields.slice(0, 2).map((field: any, i: any) => {
                const { fLabel, fType, fName, fPlaceholder }: any = field;

                return (
                  <div key={i} className="relative my-4">
                    {fType === "text" && (
                      <>
                        <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                          {fLabel}
                        </Label>
                        <div className="relative">
                          <Input
                            type={fType}
                            name={fName}
                            className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg ${
                              getNewUserProfile(fName)
                                ? `border-red-300 focus:ring-red-700`
                                : `border-indigo-300 focus:ring-indigo-400`
                            } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200
                    bg-white text-base md:text-lg`}
                            placeholder={fPlaceholder}
                          />
                        </div>
                        {getNewUserProfile(fName) && (
                          <p
                            className="text-red-500 text-xs sm:text-sm 
                          md:text-base mt-1"
                          >
                            {getNewUserProfile(fName)}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            {/* end div */}

            {/* start div for avatar field */}
            <div className="flex flex-col">
              {formFields.slice(2, 3).map((field: any, i: any) => {
                const { fLabel, fType, fName }: any = field;

                return (
                  <div key={i} className="relative my-4">
                    {fType === "file" && (
                      <>
                        <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                          {fLabel}
                        </Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            className={`flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 
                                hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500
                      dark:hover:bg-gray-600 transition duration-300
                    ease-in-out`}
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <FiUpload className="w-10 h-10 mb-3 text-gray-400" />
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>
                              </p>
                              <p
                                className="text-xs text-gray-500 
                              dark:text-gray-400"
                              >
                                PNG, JPG or JPEG (MAX. 800x400px)
                              </p>
                              {fileName && (
                                <p
                                  className="text-sm text-gray-500 
                                dark:text-gray-400 mt-2"
                                >
                                  Selected file:{fileName}
                                </p>
                              )}
                            </div>
                            <Input
                              type={fType}
                              id={fName}
                              name={fName}
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                        {getNewUserProfile(fName) && (
                          <p
                            className="text-red-500 text-xs sm:text-sm 
                            md:text-base mt-1"
                          >
                            {getNewUserProfile(fName)}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            {/* end div */}

            {/* start div for next button */}
            <div className="flex items-center justify-between mt-4">
              <Button
                type="submit"
                disabled={createIsPending}
                className={`w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br 
                    from-sky-500 via-teal-500 to-cyan-500 
                    hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-base
              md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200`}
              >
                {createIsPending ? "Please wait..." : "Next"}
              </Button>
            </div>
          </>
        )}

        {/* second stepper fields */}
        {stepper === 2 && (
          <>
            {/* start div for dob,gender,abouts field */}
            <div className="flex flex-col">
              {formFields.slice(3).map((field: any, i: any) => {
                const { fLabel, fType, fName, fPlaceholder }: any = field;

                return (
                  <div key={i} className="relative my-4">
                    {fType === "date" && (
                      <>
                        <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                          {fLabel}
                        </Label>
                        <div className="relative">
                          <Input
                            type={fType}
                            name={fName}
                            className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg ${
                              getNewUserProfile(fName)
                                ? `border-red-300 focus:ring-red-700`
                                : `border-indigo-300 focus:ring-indigo-400`
                            } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 bg-white text-base md:text-lg`}
                          />
                        </div>
                        {getNewUserProfile(fName) && (
                          <p
                            className="text-red-500 text-xs sm:text-sm 
                            md:text-base mt-1"
                          >
                            {getNewUserProfile(fName)}
                          </p>
                        )}
                      </>
                    )}

                    {fType === "radio" && (
                      <>
                        <Label
                          className="block text-gray-700 text-base 
                            md:text-lg font-semibold mb-2"
                        >
                          {fLabel}
                        </Label>
                        <RadioGroup
                          name={fName}
                          className="flex items-center space-x-4 pt-3"
                        >
                          {genderOptions.map((gen: any, j: any) => (
                            <div key={j} className="flex items-center">
                              <RadioGroupItem value={gen} />
                              <Label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">
                                {gen}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        {getNewUserProfile(fName) && (
                          <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                            {getNewUserProfile(fName)}
                          </p>
                        )}
                      </>
                    )}

                    {fType === "textarea" && (
                      <>
                        <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                          {fLabel}
                        </Label>
                        <div className="relative">
                          <Textarea
                            name={fName}
                            className={`appearance-none border-[1.5px] w-full h-24 py-2 px-3 md:px-4 rounded-lg ${
                              getNewUserProfile(fName)
                                ? `border-red-300 focus:ring-red-700`
                                : `border-indigo-300 focus:ring-indigo-400`
                            } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200
                    bg-white text-base md:text-lg`}
                            rows={4}
                            placeholder={fPlaceholder}
                          />
                        </div>
                        {getNewUserProfile(fName) && (
                          <p
                            className="text-red-500 text-xs sm:text-sm 
                            md:text-base mt-1"
                          >
                            {getNewUserProfile(fName)}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            {/* end div */}

            {/* start div for submit button content */}
            <div className="flex items-center justify-between mt-4">
              <Button
                type="submit"
                disabled={createIsPending}
                className={`w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br 
                    from-sky-500 via-teal-500 to-cyan-500 
                    hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-base
              md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200`}
              >
                {createIsPending ? "...Loading" : "Submit"}
              </Button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

// exporting ProfileCreateForm component
export default ProfileCreateForm;
