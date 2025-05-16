import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormField, FormItem, FormControl } from "../ui/form.tsx";
import { Label } from "../ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { editProfileFormdata } from "../models/profileModel.ts";

// It is ProfileEditForm component
const ProfileEditForm: React.FC = () => {
  // declare useForm hook for update profile form
  const form: any = useForm<editProfileFormdata>({
    defaultValues: {
      full_name: "",
      gender: "",
      dob: "",
      abouts: "",
    },
  });

  // declare action function of edit user profile function submit
  const handleEditProfileSubmit: SubmitHandler<editProfileFormdata> = (
    result: any
  ) => {
    console.log(result);
  };

  return (
    <>
      <Form {...form}>
        {/* start edit user profile form */}
        <form
          onSubmit={form.handleSubmit(handleEditProfileSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          {/* start modal body */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Full name */}
            <div className="mb-3">
              <FormField
                name="full_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Full name
                    </Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 
                        dark:text-white text-sm sm:text-base md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 sm:p-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Gender */}
            <div className="mb-3">
              <FormField
                name="gender"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Gender
                    </Label>
                    <FormControl>
                      <RadioGroup
                        onChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0"
                      >
                        <div className="flex items-center space-x-3">
                          {/* Male */}
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="Male" />
                            </FormControl>
                            <Label className="text-sm sm:text-base md:text-lg">
                              Male
                            </Label>
                          </FormItem>

                          {/* Female */}
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="Female" />
                            </FormControl>
                            <Label className="text-sm sm:text-base md:text-lg">
                              Female
                            </Label>
                          </FormItem>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* DateOfBirth */}
            <div className="mb-3">
              <FormField
                name="dob"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                      D.O.B
                    </Label>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 
                        dark:text-white text-sm sm:text-base md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 sm:p-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Abouts */}
            <div className="mb-3">
              <FormField
                name="abouts"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Abouts
                    </Label>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                      text-gray-900 dark:text-white text-sm sm:text-base md:text-lg rounded-lg focus:ring-blue-500 
                      focus:border-blue-500 block w-full p-2.5 sm:p-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* end modal body */}

          {/* start modal footer */}
          <div className="flex items-center p-4 sm:p-6 md:p-8 border-t border-gray-200 dark:border-gray-600">
            <div className="w-full h-10 sm:h-12 md:h-14">
              <Button
                type="submit"
                className="w-full h-10 sm:h-12 md:h-14 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg 
                text-sm sm:text-base md:text-lg text-white px-4 py-2"
              >
                Save
              </Button>
            </div>
          </div>
          {/* end modal footer */}
        </form>
        {/* end form */}
      </Form>
    </>
  );
};

// export ProfileEditForm component
export default ProfileEditForm;
