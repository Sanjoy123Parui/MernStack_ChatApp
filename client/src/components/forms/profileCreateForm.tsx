// import libraries of packages
import { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { profileFormProps } from "../models/profileModel.ts";
import ImageCrop from "./imageCrop.tsx";

// here define ProfileCreateForm functional component
const ProfileCreateForm: React.FC<profileFormProps> = ({
  stateValues,
  formAction,
  isPending,
}) => {
  // here declare useNavigate hook
  let navigate: any = useNavigate();

  // declare useState hooks
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [showCropDialog, setShowCropDialog] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");

  // here destruct data from stateValues
  const { first_name, last_name, avatar, gender, dob, abouts, errors }: any =
    stateValues;

  // define function  of select profile image file
  const handleFileChange = (e: any) => {
    let file: any = e.currentTarget.files?.[0];
    if (file) {
      setFileName(file.name);
      let reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setShowCropDialog(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // define crop image function
  const handleCropComplete = (croppedArea: any) => {
    setShowCropDialog(false);
    return croppedArea;
  };

  // declare useEffect hook for render user create profile content data
  useEffect(() => {
    if (
      first_name !== "" &&
      last_name !== "" &&
      avatar !== "" &&
      gender !== "" &&
      dob !== "" &&
      abouts !== ""
    ) {
      console.log(stateValues);
      navigate("/user/content/chat");
    }
  }, [
    first_name,
    last_name,
    avatar,
    gender,
    dob,
    abouts,
    navigate,
    stateValues,
  ]);

  // here was handle getUserCreateProfileValidationError
  const getUserCreateProfileValidationError = (fieldName: any) =>
    errors[fieldName] || "";

  // declare variables of profileFormfield
  const profileFormFields: any = [
    {
      fieldLabel: "First Name",
      fieldType: "text",
      fieldName: "first_name",
      fieldPlaceholder: "e.g. First Name",
    },
    {
      fieldLabel: "Last Name",
      fieldType: "text",
      fieldName: "last_name",
      fieldPlaceholder: "e.g. Last Name",
    },
    {
      fieldLabel: "Profile Picture",
      fieldType: "file",
      fieldName: "avatar",
    },
    {
      fieldLabel: "Gender",
      fieldType: "radio",
      fieldName: "gender",
    },
    {
      fieldLabel: "D.O.B",
      fieldType: "date",
      fieldName: "dob",
    },
    {
      fieldLabel: "About",
      fieldType: "textarea",
      fieldName: "abouts",
      fieldPlaceholder: "Tell us a little bit about yourself...",
    },
  ];

  // declare variables of genderOptions
  const genderOptions: any = ["Male", "Female", "Others"];

  return (
    <>
      {showCropDialog && imageSrc && (
        <ImageCrop
          imageSrc={imageSrc}
          onCropComplete={handleCropComplete}
          onClose={() => setShowCropDialog(false)}
        />
      )}

      <form
        action={(formData: FormData) => {
          formAction(formData);
        }}
        className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
      >
        {/* start first content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profileFormFields.slice(0, 2).map((field: any, i: any) => {
            let { fieldLabel, fieldType, fieldName, fieldPlaceholder }: any =
              field;
            return (
              <div key={i} className="relative mb-4">
                {/* first name and last name */}
                <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                  {fieldLabel}
                </Label>
                <div className="relative">
                  <Input
                    type={fieldType}
                    name={fieldName}
                    className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg ${
                      errors?.[fieldName]
                        ? `border-red-300 focus:ring-red-700`
                        : `border-indigo-300 focus:ring-indigo-400`
                    } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 
                    bg-white text-base md:text-lg`}
                    placeholder={fieldPlaceholder}
                  />
                </div>
                {getUserCreateProfileValidationError(fieldName) && (
                  <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                    {errors?.[fieldName]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {/* end first content */}

        {/* start second content */}
        {profileFormFields.slice(2).map((field: any, i: any) => {
          let { fieldLabel, fieldType, fieldName, fieldPlaceholder }: any =
            field;
          return (
            <div key={i} className="relative mb-4">
              {/* upload profile image content */}
              {fieldType === "file" && (
                <>
                  <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                    {fieldLabel}
                  </Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor={fieldName}
                      className={`flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 
                      dark:hover:bg-gray-600 transition duration-300 
                    ease-in-out`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FiUpload className="w-10 h-10 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                        {fileName && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Selected file: {fileName}
                          </p>
                        )}
                      </div>
                      <Input
                        type={fieldType}
                        id={fieldName}
                        name={fieldName}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {getUserCreateProfileValidationError(fieldName) && (
                    <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                      {errors?.[fieldName]}
                    </p>
                  )}
                </>
              )}

              {/* gender content */}
              {fieldType === "radio" && (
                <>
                  <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                    {fieldLabel}
                  </Label>
                  <RadioGroup
                    name={fieldName}
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
                  {getUserCreateProfileValidationError(fieldName) && (
                    <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                      {errors?.[fieldName]}
                    </p>
                  )}
                </>
              )}

              {/* dateOfbirth content */}
              {fieldType === "date" && (
                <>
                  <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                    {fieldLabel}
                  </Label>
                  <div className="relative">
                    <Input
                      type={fieldType}
                      name={fieldName}
                      className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg ${
                        errors?.[fieldName]
                          ? `border-red-300 focus:ring-red-700`
                          : `border-indigo-300 focus:ring-indigo-400`
                      } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 bg-white text-base md:text-lg`}
                    />
                  </div>
                  {getUserCreateProfileValidationError(fieldName) && (
                    <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                      {errors?.[fieldName]}
                    </p>
                  )}
                </>
              )}

              {/* abouts content */}
              {fieldType === "textarea" && (
                <>
                  <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                    {fieldLabel}
                  </Label>
                  <Textarea
                    name={fieldName}
                    className={`appearance-none border-[1.5px] w-full h-24 py-2 px-3 md:px-4 rounded-lg ${
                      errors?.[fieldName]
                        ? `border-red-300 focus:ring-red-700`
                        : `border-indigo-300 focus:ring-indigo-400`
                    } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 
                    bg-white text-base md:text-lg`}
                    rows={4}
                    placeholder={fieldPlaceholder}
                  />
                  {getUserCreateProfileValidationError(fieldName) && (
                    <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                      {errors?.[fieldName]}
                    </p>
                  )}
                </>
              )}
            </div>
          );
        })}
        {/* end second content */}

        {/* start create button content */}
        <div className="flex items-center justify-between mt-4">
          <Button
            type="submit"
            disabled={isPending}
            className={`w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br from-sky-500 via-teal-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-base 
              md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200`}
          >
            {isPending ? "Loading..." : "Create"}
          </Button>
        </div>
        {/* end create button content */}
      </form>
    </>
  );
};
// here export ProfileCreateForm functional components
export default ProfileCreateForm;
