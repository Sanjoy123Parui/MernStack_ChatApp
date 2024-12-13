import {UseFormReturn} from "react-hook-form";

// here declare instance of user login form data interface model
export interface userLoginFormData {
    phone: string;
    password: string;
};

// define interface for instance of passing props of user login data
export interface LoginFormProps {
    form: UseFormReturn<any>;
    onSubmit: (data: any) => void;
};