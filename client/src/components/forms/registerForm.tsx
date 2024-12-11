// here import all form packages of libraries
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form.tsx";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

// here was define register form functional component
const RegisterForm: React.FC = () => {

    // declare useState hook for show/hide password
    const [toggleRegisterPassword, setToggleRegisterPassword] = useState<boolean>(false);

    // declare useForm hook from react-hook-form for form handling
    let form = useForm<any>();

    // define function for toggle show/hide password
    const visibilityRegister = () => {
        setToggleRegisterPassword(!toggleRegisterPassword);
    }

    return (
        <>
            {/* start register form content */}
            <Form {...form}>
                {/* start register form */}
                <form className="space-y-8 bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">

                    {/* register form country input content */}
                    <div className="mb-4">
                        <FormField control={form.control} name="country" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="block text-gray-700 text-sm md:text-base font-bold mb-2">Country</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500" placeholder="Choose you contry" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="India">India</SelectItem>
                                        <SelectItem value="USA">USA</SelectItem>
                                        <SelectItem value="UK">UK</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />
                    </div>

                    {/* register form phone input content */}
                    <div className="mb-4">
                        <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="block text-gray-700 text-sm md:text-base font-bold mb-2">Phone</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500" placeholder="Phone" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    </div>

                    {/* register form password input content */}
                    <div className="relative mb-4">
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lock text-gray-700 text-sm md:text-base font-bold mb-2">Password</FormLabel>
                                <FormControl>
                                    <Input type={toggleRegisterPassword ? 'text' : 'password'} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                        placeholder="Password" {...field} />
                                </FormControl>
                                <button type="button" onClick={visibilityRegister} className="absolute top-10 right-3 mt-4 transform -translate-y-1/2 text-gray-500">{toggleRegisterPassword ? <FaEye /> : <FaEyeSlash />}</button>
                            </FormItem>
                        )} />
                    </div>


                    {/* register form confirm password input content */}
                    <div className="relative mb-4">
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lock text-gray-700 text-sm md:text-base font-bold mb-2">Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type={toggleRegisterPassword ? 'text' : 'password'} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                        placeholder="Password" {...field} />
                                </FormControl>
                                <button type="button" onClick={visibilityRegister} className="absolute top-10 right-3 mt-4 transform -translate-y-1/2 text-gray-500">{toggleRegisterPassword ? <FaEye /> : <FaEyeSlash />}</button>
                            </FormItem>
                        )} />
                    </div>

                    {/* register form register button content */}
                    <div className="flex items-center justify-between">
                        <Button className="w-full bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</Button>
                    </div>

                </form>
                {/* start register form */}
            </Form>
            {/* end register form content */}
        </>
    );
}

// export register form functional component
export default RegisterForm;