import { UseFormReturn } from "react-hook-form";

// here was declare interface model of support
export interface supportFormdata {
  full_name: string;
  from_Phone: string;
  to_Phone: string;
  report_Feedback: string;
}

// here declare with export interface model of supportPropsdata
export interface supportPropsdata {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}
