// here import all form packages of libraries
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from '@/components/ui/form.tsx';

import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { loginFormProps } from '../models/signupModel.ts';




// here was define login form functional component
const LoginForm: React.FC<loginFormProps> = ({ form, onSubmit }) => {

    // declare useState hooks show/hide password
    let [toggleLoginPassword, setToggleLoginPassword] = useState<boolean>(false);


    // define function for toggle show/hide password
    const visibilityLogin = () => {
        setToggleLoginPassword(!toggleLoginPassword);
    }


    return (
        <>
            {/* start login form-content */}
            <Form {...form}>
                {/* start form */}
                <form onSubmit={onSubmit} className="space-y-8 bg-white border-[2px] shadow-xl rounded-2xl px-8 pt-6 pb-8 mb-4">

                    {/* login form phone input content */}
                    <div className="mb-4">
                        <FormField control={form.control} name="phone" render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel className="block text-gray-700 text-sm md:text-base font-bold mb-2">Phone</FormLabel>
                                <FormControl>
                                    <Input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-blue-500" {...field} placeholder="Phone" />
                                </FormControl>
                                {/* error of login form phone input field validation */}
                                {fieldState?.error && (
                                    <p className="text-red-500 text-sm">{fieldState?.error.message}</p>
                                )}
                            </FormItem>
                        )} />
                    </div>

                    {/* login form password input content */}
                    <div className="relative mb-4">
                        <FormField control={form.control} name="password" render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel className="block text-gray-700 text-sm md:text-base font-bold mb-2">Password</FormLabel>
                                <FormControl>
                                    <Input type={toggleLoginPassword ? 'text' : 'password'} {...field} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                        placeholder="Password" />
                                </FormControl>
                                <button type="button" onClick={visibilityLogin} className="absolute top-10 right-3 mt-4 transform -translate-y-1/2 text-gray-500">{toggleLoginPassword ? <FaEye /> : <FaEyeSlash />}</button>
                                {/* error of login form password input field validation */}
                                {fieldState?.error && (
                                    <p className="text-red-500 text-sm">{fieldState?.error.message}</p>
                                )}
                            </FormItem>
                        )} />
                    </div>

                    {/* login form login button content */}
                    <div className="flex items-center justify-between">
                        <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</Button>
                    </div>

                </form>
                {/* end form */}
            </Form>
            {/* end form-content */}
        </>
    );

}

// here export LoginForm component
export default LoginForm;