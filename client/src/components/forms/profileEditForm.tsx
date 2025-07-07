import { Label } from "../ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { editProfileFormprops } from "../models/profileModel.ts";


// It is ProfileEditForm component
const ProfileEditForm: React.FC<editProfileFormprops> = ({ stateValues, formAction, isPending }) => {

  // here destruct stateValues data
  const { full_name, gender, dob, abouts, errors }: any = stateValues;

  if (full_name !== "" && gender !== "" && dob !== "" && abouts !== "") {
    console.log(stateValues);
  }


  // define function of getValidateErrors
  const getValidateErrors = (fieldName: any) => errors[fieldName] || "";


  return (
    <>
      {/* start edit user profile form */}
      <form action={(formData: FormData) => {
        formAction(formData);
      }} className="space-y-4 sm:space-y-6">
        {/* start modal body */}
        <div className="p-4 ">
          {/* start full_name content */}
          <div className="mb-3">
            <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              Full name
            </Label>
            <Input
              type="text"
              name="full_name"
              className={`bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
             ${errors?.full_name ? `border border-red-300 dark:border-red-600 focus:ring-pink-500 focus:border-pink-500`
                  : `border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500`}
             text-sm sm:text-base md:text-lg rounded-lg block w-full p-2.5 sm:p-3`} />
            {getValidateErrors("full_name") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.full_name}</p>
            )}
          </div>
          {/* end full_name content */}

          {/* start Gender content */}
          <div className="mb-3">
            <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              Gender
            </Label>
            <RadioGroup name="gender" className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-3">
                {/* Male */}
                <RadioGroupItem value="Male" />
                <Label className="text-sm sm:text-base md:text-lg">
                  Male
                </Label>

                {/* Female */}
                <RadioGroupItem value="Female" />
                <Label className="text-sm sm:text-base md:text-lg">
                  Female
                </Label>

                {/* Other */}
                <RadioGroupItem value="Other" />
                <Label className="text-sm sm:text-base md:text-lg">
                  Other
                </Label>
              </div>
            </RadioGroup>
            {getValidateErrors("gender") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.gender}</p>
            )}
          </div>
          {/* end gender content */}

          {/* start dob content */}
          <div className="mb-3">
            <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              D.O.B
            </Label>
            <Input
              type="date"
              name="dob"
              className={`bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
              ${errors?.dob ? `border border-red-300 dark:border-red-600 focus:ring-pink-500 focus:border-pink-500`
                  : `border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500`}
              text-sm sm:text-base md:text-lg rounded-lg block w-full p-2.5 sm:p-3`}
            />
            {getValidateErrors("dob") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.dob}</p>
            )}
          </div>
          {/* end dob content */}

          {/* start abouts content */}
          <div className="mb-3">
            <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              Abouts
            </Label>
            <Textarea
              name="abouts"
              className={`bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
              ${errors?.abouts ? `border border-red-300 dark:border-red-600 focus:ring-pink-500 focus:border-pink-500`
                  : `border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500`}
              text-sm sm:text-base md:text-lg rounded-lg block w-full p-2.5 sm:p-3`}
            />
            {getValidateErrors("abouts") && (
              <p className="text-red-500 text-sm lg:text-base">{errors?.abouts}</p>
            )}
          </div>
          {/* end abouts content */}
        </div>
        {/* end modal body */}

        {/* start modal footer */}
        <div className="flex items-center p-4  border-t border-gray-200 dark:border-gray-600">
          <div className="w-full h-10 sm:h-12 md:h-14">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-10 sm:h-12 md:h-14 bg-gradient-to-r from-green-400 via-green-500 to-green-600 
              hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg 
              text-sm sm:text-base md:text-lg text-white px-4 py-2"
            >
              {isPending ? "...Loading" : "Save"}
            </Button>
          </div>
        </div>
        {/* end modal footer */}
      </form>
      {/* end form */}
    </>
  );
};

// export ProfileEditForm component
export default ProfileEditForm;
