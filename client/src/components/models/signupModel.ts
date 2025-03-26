import { UseFormReturn } from "react-hook-form";

// here declare instance of login form data interface model
export interface loginFormdata {
  phone: string;
  password: string;
}

// here declare instance of register form data interface model
export interface registerFormdata {
  phone: string;
  password: string;
  confirmPassword: string;
}

// here was declare instance of link interface model
export interface routeNavigateList {
  desc: string;
  links: string;
  linkName: string;
}

// here declare instance of change password form data interface model
export interface changePasswordFormdata {
  phone: string;
  password: string;
  confirmPassword: string;
}

// define interface for instance of passing props of login form data
export interface loginFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

// define interface for instance of passing props of regiter form data
export interface registerFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

// define interface for instance of passing props of change password form data
export interface changePasswordFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}
