import { UseFormReturn } from "react-hook-form";

// here declare instance of user login form data interface model
export interface userLoginFormData {
    phone: string;
    password: string;
};


// here declare instance of user register form data interface model
export interface userRegisterFormData {
    phone: string;
    password: string;
    confirmPassword: string;
};



// define interface for instance of passing props of login form data
export interface LoginFormProps {
    form: UseFormReturn<any>;
    onSubmit: (data: any) => void;
};


// define interface for instance of passing props of regiter form data
export interface RegisterFormProps {
    form: UseFormReturn<any>;
    onSubmit: (data: any) => void;
}