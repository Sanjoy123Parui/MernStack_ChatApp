// here import all form packages of libraries
import { useForm } from "react-hook-form";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';




// here was define login form functional component
const LoginForm: React.FC = () => {

    // declare userForm hook from react-hook-form for form handling
    const form = useForm<any>();

    return (
        <>
            {/* start form-content */}
            <Form {...form}>
                {/* start form */}
                <form className="space-y-8 bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">

                    {/* user login form phone input content */}
                    <div className="mb-4">
                        <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lock text-gray-700 text-sm md:text-base font-bold mb-2">Phone</FormLabel>
                                <FormControl>
                                    <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500" placeholder="Phone" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    </div>

                    {/* user login form password input content */}
                    <div className="mb-4">
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lock text-gray-700 text-sm md:text-base font-bold mb-2">Password</FormLabel>
                                <FormControl>
                                    <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500" placeholder="Password" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    </div>

                    {/* user login form login button content */}
                    <div className="flex items-center justify-between">
                        <Button className="w-full bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</Button>
                    </div>

                </form>
                {/* end form */}
            </Form>
            {/* end form-content */}
        </>
    );

}

export default LoginForm;
