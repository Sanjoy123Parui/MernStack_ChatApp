import { UseFormReturn } from "react-hook-form";

// here declare instance of login form data interface model
export interface loginFormdata {
    phone: string;
    password: string;
};


// here declare instance of register form data interface model
export interface registerFormdata {
    phone: string;
    password: string;
    confirmPassword: string;
};



// define interface for instance of passing props of login form data
export interface loginFormProps {
    form: UseFormReturn<any>;
    onSubmit: (data: any) => void;
};


// define interface for instance of passing props of regiter form data
export interface registerFormProps {
    form: UseFormReturn<any>;
    onSubmit: (data: any) => void;
}