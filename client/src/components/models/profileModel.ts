import { UseFormReturn } from "react-hook-form";

// here define instance of profile form data interface model
export interface profileFormdata {
    full_name: string;
    avatar: string;
    gender: string;
    dob: string;
    abouts: string;
};


// define interface for instance of passing props of profile form images crop
export interface imageCropdialogprops {};

// define interface for instance of passing props of profile form data
export interface profileFormProps {
    form: UseFormReturn<any>;
    onSubmit: (data: any) => void;
};