// here import some modules libraries or components
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomerSupportForm from "../forms/customerSupportForm.tsx";
import { supportFormdata } from "../models/supportModel.ts";
import { userSupportValidatorSchema } from "../validations/supportValidator.ts";

// here define Supports functional component
const Supports: React.FC = () => {

    // here was declare useForm hook which are react-hook-form
    const form: any = useForm<supportFormdata>({
        resolver: zodResolver(userSupportValidatorSchema),
        defaultValues: {
            full_name: "",
            from_Phone: "",
            to_Phone: "",
            report_Feedback: ""
        }
    });

    // here was define submit support form functions
    const userSupporthandleSubmit: SubmitHandler<supportFormdata> = (res: any) => {
        console.log(res);
        form.reset();
    };
    return (
        <>
            <section className="body-font overflow-hidden">
                <div className="container px-5 py-7 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-8 lg:p-4 mb-auto lg:mb-12 w-full flex flex-col items-center">
                            {/* start div for loading CustomerSupportForm component */}
                            <div className="w-full max-w-lg mx-auto">
                                <CustomerSupportForm form={form} onSubmit={form.handleSubmit(userSupporthandleSubmit)} />
                            </div>
                            {/* end dif for CustomerSupportForm component */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// export Supports functional component
export default Supports;
