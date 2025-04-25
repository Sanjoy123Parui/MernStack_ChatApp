import { Form, FormField, FormItem, FormControl } from "../ui/form.tsx";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { supportPropsdata } from "../models/supportModel.ts";

// here define CustomerSupportForm component
const CustomerSupportForm: React.FC<supportPropsdata> = ({ form, onSubmit }) => {
    return (
        <>
            <div className="bg-white border-[1px] shadow-xl rounded-2xl px-8 pt-6 md:p-16 mt-0 lg:mt-4 -mx-0 lg:-mx-32 pb-8 mb-4 ">
                {/* start heading for Contact Us support */}
                <h1 className=" text-xl lg:text-3xl text-center font-bold text-blue-950 mb-8">
                    Contact Us
                </h1>
                {/* end heading */}

                {/* start support form-content */}
                <Form {...form}>
                    {/* start form */}
                    <form onSubmit={onSubmit} className="space-y-6">
                        {/* start fullName content */}
                        <div className="mb-2">
                            <FormField control={form.control} name="full_name" render={({ field, fieldState }) => (
                                <FormItem>
                                    <Label className="block text-gray-700 text-base lg:text-lg font-medium mb-2">Full name</Label>
                                    <FormControl>
                                        <Input type="text" {...field} className={`shadow appearance-none border-[1px] ${fieldState.error
                                            ? "border-red-500"
                                            : "border-gray-500"
                                            } rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
                                            placeholder="Please gives us Full name" />
                                    </FormControl>

                                    {fieldState?.error && (
                                        <p className="text-red-500 text-sm lg:text-base">{fieldState?.error.message}</p>
                                    )}
                                </FormItem>
                            )} />
                        </div>
                        {/* end fullName content */}

                        {/* start fromPhone content */}
                        <div className="mb-2">
                            <FormField control={form.control} name="from_Phone" render={({ field, fieldState }) => (
                                <FormItem>
                                    <Label className="block text-gray-700 text-base lg:text-lg font-medium mb-2">From Phone</Label>
                                    <FormControl>
                                        <Input type="number" {...field} className={`shadow appearance-none border-[1px] 
                                        ${fieldState.error ? "border-red-500" : "border-gray-500"} 
                                        rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none 
                                        focus:ring focus:ring-gray-700`} placeholder="Please gives us your phone number" />
                                    </FormControl>
                                    {fieldState?.error && (
                                        <p className="text-red-500 text-sm lg:text-base">{fieldState?.error.message}</p>
                                    )}
                                </FormItem>
                            )} />
                        </div>
                        {/* end fromPhone content */}

                        {/* start toPhone content */}
                        <div className="mb-2">
                            <FormField control={form.control} name="to_Phone" render={({ field, fieldState }) => (
                                <FormItem>
                                    <Label className="block text-gray-700 text-base lg:text-lg font-medium mb-2">To Phone</Label>
                                    <FormControl>
                                        <Input type="number" {...field} className={`shadow appearance-none border-[1px] 
                                        ${fieldState.error ? "border-red-500" : "border-gray-500"} 
                                        rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none 
                                        focus:ring focus:ring-gray-700`} placeholder="Please gives us your issues phone number" />
                                    </FormControl>
                                    {fieldState?.error && (
                                        <p className="text-red-500 text-sm lg:text-base">{fieldState?.error.message}</p>
                                    )}
                                </FormItem>
                            )} />
                        </div>
                        {/* end toPhone content */}

                        {/* start ReportFeedback content */}
                        <div className="mb-2">
                            <FormField control={form.control} name="report_Feedback" render={({ field, fieldState }) => (
                                <FormItem>
                                    <Label className="block text-gray-700 text-base lg:text-lg font-medium mb-2">Feedback</Label>
                                    <FormControl>
                                        <Textarea {...field} className={`shadow appearance-none border-[1px] 
                                        ${fieldState.error ? "border-red-500" : "border-gray-500"} 
                                        rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none 
                                        focus:ring focus:ring-gray-700`} placeholder="Please gives us your feedback" />
                                    </FormControl>
                                    {fieldState?.error && (
                                        <p className="text-red-500 text-sm lg:text-base">{fieldState?.error.message}</p>
                                    )}
                                </FormItem>
                            )} />
                        </div>
                        {/* end ReportFeedback content */}

                        {/* start send button content */}
                        <div className="flex items-center justify-between">
                            <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-950 text-white font-bold 
                            rounded-2xl py-2 px-4 focus:outline-none focus:shadow-outline">
                                Send
                            </Button>
                        </div>
                        {/* start send button content */}
                    </form>
                    {/* end form */}
                </Form>
                {/* end form-content */}
            </div>
        </>
    );
}
// here was export CustomerSupportForm
export default CustomerSupportForm;
