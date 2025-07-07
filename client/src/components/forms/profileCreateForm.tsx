// import libraries of packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { profileFormProps } from "../models/profileModel.ts";
import ImageCrop from "./imageCrop.tsx";

// here define ProfileCreateForm functional component
const ProfileCreateForm: React.FC<profileFormProps> = ({ stateValues, formAction, isPending }) => {

  // here declare useNavigate hook
  let navigate: any = useNavigate();

  // declare useState hooks
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [showCropDialog, setShowCropDialog] = useState<boolean>(false);

  // here destruct data from stateValues
  const { full_name, avatar, gender, dob, abouts, errors }: any = stateValues;

  // define function  of select profile image file
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
  const handleFileChange = (e: any) => {
    // declare variable of select file
    let file: any = e.currentTarget.files?.[0];

    // check condition file select
    if (file) {
      // read file
      let reader = new FileReader();

      // load the read file
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setShowCropDialog(true);
      };

      // here was file dataurl
      reader.readAsDataURL(file);
    }
  };

  // define crop image function
  const handleCropComplete = (croppedArea: any) => {
    // after cropped image
    setShowCropDialog(false);
    return croppedArea;
  };


  // declare useEffect hook for render user create profile content data
  useEffect(() => {
    if (full_name !== "" && avatar !== "" && gender !== "" && dob !== "" && abouts !== "") {
      console.log(stateValues);
      navigate("/user/content/chat")
    }
  }, [full_name, avatar, gender, dob, abouts, navigate, stateValues]);


  // here was handle getUserCreateProfileValidationError
  const getUserCreateProfileValidationError = (fieldName: any) => errors[fieldName] || "";

  return (
    <>
      {/* here was popup imageCrop component */}
      {showCropDialog && imageSrc && (
        <ImageCrop
          imageSrc={imageSrc}
          onCropComplete={handleCropComplete}
          onClose={() => setShowCropDialog(false)}
        />
      )}

      {/* start div for create profile form */}
      <div className="bg-white border-[1px] shadow-xl rounded-2xl px-8 pt-6 md:p-16 mt-0 lg:mt-4 -mx-0 lg:-mx-32 pb-8 mb-4 ">
        {/* here is heading of profile form */}
        <h1 className=" text-lg lg:text-2xl text-center font-bold text-blue-950 mb-8">
          Create Profile
        </h1>

        {/* start form of create profile */}
        <form action={(formData: FormData) => {
          formAction(formData);
        }} className="space-y-6">
          {/* start fullName content */}
          <div className="mb-2">
            <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
              Full name
            </Label>
            <Input
              type="text"
              name="full_name"
              className={`shadow appearance-none border-[1px] rounded-xl w-full h-10 py-2 px-3
              ${errors?.full_name ? `border-red-300 focus:ring-red-700` : `border-gray-500 focus:ring-gray-700`}
              text-gray-900 leading-tight focus:outline-none focus:ring`}
              placeholder="Full name"
            />
            {getUserCreateProfileValidationError("full_name") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.full_name}</p>
            )}
          </div>
          {/* end fullName content */}

          {/* start profile picture upload content */}
          <div className="mb-2">
            <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
              Profile Image
            </Label>
            <Input
              type="file"
              name="avatar"
              onChange={handleFileChange}
              className={`shadow appearance-none border-[1px] rounded-xl w-full h-10 py-0 px-3
              ${errors?.avatar ? `border-red-300 focus:ring-red-700` : `border-gray-500 focus:ring-gray-700`}
              text-gray-900 leading-tight focus:outline-none focus:ring`}
            />
            {getUserCreateProfileValidationError("avatar") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.avatar}</p>
            )}
          </div>
          {/* end profile picture upload content */}

          {/* start gender content */}
          <div className="mb-2">
            <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
              Gender
            </Label>
            <RadioGroup name="gender" className="flex flex-col space-y-1">
              <div className="flex items-center space-x-3 space-y-0">
                {/* Male */}
                <Label className="font-normal px-2">Male</Label>
                <RadioGroupItem value="Male" />

                {/* Female */}
                <Label className="font-normal px-2">Female</Label>
                <RadioGroupItem value="Female" />

                {/* Other */}
                <Label className="font-normal px-2">Other</Label>
                <RadioGroupItem value="Other" />
              </div>
            </RadioGroup>
            {getUserCreateProfileValidationError("gender") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.gender}</p>
            )}
          </div>
          {/* end gender content */}

          {/* start dateOfbirth content */}
          <div className="mb-2">
            <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
              D.O.B
            </Label>
            <Input
              type="date"
              name="dob"
              className={`shadow appearance-none border-[1px] border-gray-500 rounded-xl w-full h-10 py-2 px-3
              ${errors?.dob ? `border-red-300 focus:ring-red-700` : `border-gray-500 focus:ring-gray-700`}
              text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
            />
            {getUserCreateProfileValidationError("dob") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.dob}</p>
            )}
          </div>
          {/* end dateOfbirth content */}

          {/* start abouts content */}
          <div className="mb-2">
            <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
              Abouts
            </Label>
            <Textarea
              name="abouts"
              className={`shadow appearance-none border-[1px] border-gray-500 rounded-xl w-full h-auto py-2 px-3
              ${errors?.abouts ? `border-red-300 focus:ring-red-700` : `border-gray-500 focus:ring-gray-700`}
              text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
              placeholder="Please gives us abouts"
            />
            {getUserCreateProfileValidationError("abouts") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.abouts}</p>
            )}
          </div>
          {/* end Abouts content */}

          {/* profile form create button */}
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-11 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
                focus:ring-4  focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-white text-sm md:text-lg 
                rounded-2xl py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              {isPending ? "...Loading" : "Create"}
            </Button>
          </div>
        </form>
        {/* end form */}
      </div>
    </>
  );
};
// here export ProfileCreateForm functional components
export default ProfileCreateForm;
