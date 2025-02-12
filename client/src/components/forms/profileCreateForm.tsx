// import libraries of packages
import React, { useState } from "react";

// import components of ui
import { Form, FormField, FormItem, FormControl } from "../ui/form.tsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { profileFormProps } from "../models/profileModel.tsx";
import ImageCrop from "./imageCrop.tsx";

// here define ProfileCreateForm functional component
const ProfileCreateForm: React.FC<profileFormProps> = ({ form, onSubmit }) => {
  // declare useState hooks
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [showCropDialog, setShowCropDialog] = useState<boolean>(false);

  // define function  of select profile image file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="bg-white border-[1px] shadow-xl rounded-2xl px-8 pt-6 mt-0 lg:mt-4 -mx-0 lg:-mx-32 pb-8 mb-4 ">
        {/* here is heading of profile form */}
        <h1 className=" text-lg lg:text-2xl text-center font-bold text-blue-950 mb-8">
          Create Profile
        </h1>

        {/* start profile form content */}
        <Form {...form}>
          {/* start form of create profile */}
          <form onSubmit={onSubmit} className="space-y-6">
            {/* fullName content */}
            <div className="mb-2">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
                      Full name
                    </Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className={`shadow appearance-none border-[1px] ${
                          fieldState.error
                            ? "border-red-500"
                            : "border-gray-500"
                        } rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
                        placeholder="Full name"
                      />
                    </FormControl>

                    {/* here fire error message of full name input */}
                    {fieldState?.error && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {fieldState?.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* profile picture upload content */}
            <div className="mb-2">
              <FormField
                control={form.control}
                name="avatar"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
                      Profile Image
                    </Label>
                    <FormControl>
                      <Input
                        type="file"
                        onChange={(e) => {
                          field.onChange(e.currentTarget.files?.[0]);
                          handleFileChange(e);
                        }}
                        className={`shadow appearance-none border-[1px] ${
                          fieldState.error
                            ? "border-red-500"
                            : "border-gray-500"
                        } rounded-xl w-full py-0 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
                      />
                    </FormControl>

                    {/* here fire error message of profile image input */}
                    {fieldState?.error && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {fieldState?.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* gender content */}
            <div className="mb-2">
              <FormField
                control={form.control}
                name="gender"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
                      Gender
                    </Label>
                    <FormControl>
                      <RadioGroup
                        onChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-3 space-y-0">
                          {/* Male */}
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="Male" />
                            </FormControl>
                            <Label className="font-normal px-2">Male</Label>
                          </FormItem>

                          {/* Female */}
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="Female" />
                            </FormControl>
                            <Label className="font-normal px-2">Female</Label>
                          </FormItem>
                        </div>
                      </RadioGroup>
                    </FormControl>

                    {/* here fire error message of gender input */}
                    {fieldState?.error && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {fieldState?.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* dateOfbirth content */}
            <div className="mb-2">
              <FormField
                control={form.control}
                name="dob"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
                      D.O.B
                    </Label>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className={`shadow appearance-none border-[1px] ${
                          fieldState.error
                            ? "border-red-500"
                            : "border-gray-500"
                        } rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
                      />
                    </FormControl>

                    {/* here fire error message of dateOfbirth input */}
                    {fieldState?.error && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {fieldState?.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* abouts content */}
            <div className="mb-2">
              <FormField
                control={form.control}
                name="abouts"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Label className="block text-gray-700 text-base lg:text-lg font-bold mb-2">
                      Abouts
                    </Label>
                    <FormControl>
                      <Textarea
                        {...field}
                        className={`shadow appearance-none border-[1px] ${
                          fieldState.error
                            ? "border-red-500"
                            : "border-gray-500"
                        } rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
                        placeholder="Please gives us abouts"
                      />
                    </FormControl>

                    {/* here fire error message of abouts input */}
                    {fieldState?.error && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {fieldState?.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* profile form create button */}
            <div className="flex items-center justify-between">
              <Button
                type="submit"
                className="w-full bg-gray-700 hover:bg-gray-950 text-white font-bold rounded-2xl py-2 px-4 focus:outline-none focus:shadow-outline"
              >
                Create
              </Button>
            </div>
          </form>
          {/* end form */}
        </Form>
      </div>
    </>
  );
};
// here export ProfileCreateForm functional components
export default ProfileCreateForm;
