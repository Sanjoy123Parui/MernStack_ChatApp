import React, { useState } from "react";

import {
    Form,
    FormField,
    FormItem,
    FormControl
} from '../ui/form.tsx';

import {
    RadioGroup,
    RadioGroupItem
} from '../ui/radio-group.tsx';

import { Textarea } from '../ui/textarea.tsx';
import { Label } from '../ui/label.tsx';
import { Input } from '../ui/input.tsx';
import { Button } from '../ui/button.tsx';
import { profileFormProps } from '../models/profileModel.ts';
import ImageCrop from './imageCrop.tsx';


// here define profile form functional component
const ProfileCreateForm: React.FC<profileFormProps> = ({ form, onSubmit }) => {

    // here declare useState hooks for image select in crop component
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [showCropDialog, setShowCropDialog] = useState<boolean>(false);

    //declare function of select file
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // here declare variable of target files
        let file: any = e.currentTarget.files?.[0];

        // check condition
        if (file) {

            let reader = new FileReader();

            reader.onload = () => {
                setImageSrc(reader.result as string);
                setShowCropDialog(true);
            };
            reader.readAsDataURL(file);
        }

    }


    // declare here handleCrop function 
    const handleCropComplete = (croppedArea: any) => {
        console.log(croppedArea);

        setShowCropDialog(false);
    }


    return (
        <>
            {/* here load image crop component */}
            {showCropDialog && imageSrc && (
                <ImageCrop
                    imageSrc={imageSrc}
                    onCropComplete={handleCropComplete}
                    onClose={() => setShowCropDialog(false)}
                />
            )}

            {/* start div for create profile form */}
            <div className="bg-white border-[1px] shadow-2xl rounded-2xl px-8 pt-6 md:-mx-32 pb-8 mb-4">

                {/* declare heading of profile form */}
                <h1 className="text-3xl text-center font-bold text-blue-950 mb-8">Create</h1>


                {/* start Profile Form-content */}
                <Form {...form}>
                    {/* start form */}
                    <form onSubmit={onSubmit} className="space-y-8">

                        {/* profile form fullName content */}
                        <div className="mb-4">
                            <FormField
                                control={form.control}
                                name="full_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label className="block text-gray-700 text-sm md:text-base font-bold mb-2">Full name</Label>
                                        <FormControl>
                                            <Input type="text" {...field} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700"  placeholder="Full name" />
                                        </FormControl>
                                    </FormItem>
                                )} />
                        </div>


                        {/* profile form Picture content */}
                        <div className="mb-4">
                            <FormField
                                control={form.control}
                                name="avatar"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label className="block text-gray-700 text-sm md:text-base font-bold mb-2">Picture</Label>
                                        <FormControl>
                                            <Input type="file" onChange={(e) => {
                                                field.onChange(e.currentTarget.files?.[0]);
                                                handleFileChange(e);
                                            }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700" />
                                        </FormControl>
                                    </FormItem>
                                )} />
                        </div>


                        {/* profile form gender content */}
                        <div className="mb-4">
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <Label className="block text-gray-700 text-sm md:text-base font-bold mb-2">Gender</Label>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1">
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="Male" />
                                                    </FormControl>
                                                    <Label className="font-normal">Male</Label>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="Female" />
                                                    </FormControl>
                                                    <Label className="font-normal">Female</Label>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </FormItem>
                                )} />
                        </div>


                        {/* profile form DateOfBirth content */}
                        <div className="mb-4">
                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label className="block text-gray-700 text-sm md:text-base font-bold mb-2">D.O.B</Label>
                                        <FormControl>
                                            <Input type="date" {...field} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700" />
                                        </FormControl>
                                    </FormItem>
                                )} />
                        </div>


                        {/* profile form DateOfBirth content */}
                        <div className="mb-4">
                            <FormField
                                control={form.control}
                                name="abouts"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label className="block text-gray-700 text-sm md:text-base font-bold mb-2">Abouts</Label>
                                        <FormControl>
                                            <Textarea {...field} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700" placeholder="Please gives us abouts" />
                                        </FormControl>
                                    </FormItem>
                                )} />
                        </div>


                        {/* create button of profile form */}
                        <div className="flex items-center justify-between">
                            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create</Button>
                        </div>

                    </form>
                    {/* end form */}
                </Form>
                {/* end Profile Form-content */}


            </div>
            {/* end div */}
        </>
    );
}

// export Profile create form functional component
export default ProfileCreateForm;