import {
    Form,
    FormField,
    FormItem,
    FormControl
} from '../ui/form.tsx';

import { Label } from '../ui/label.tsx';
import { Input } from '../ui/input.tsx';
import { Button } from '../ui/button.tsx';
import { profileFormProps } from '../models/profileModel.ts';

// here define profile form functional component
const ProfileCreateForm: React.FC<profileFormProps> = ({ form, onSubmit }) => {

    return (
        <>
            {/* start div for create profile form */}
            <div className="bg-white border-[1px] shadow-xl rounded-2xl px-8 pt-6 md:-mx-32 pb-8 mb-4">

                {/* declare heading of profile form */}
                <h1 className="text-3xl text-center font-bold text-blue-950 mb-6">Create Profile</h1>


                {/* start Profile Form-content */}
                <Form {...form}>
                    {/* start form */}
                    <form onSubmit={onSubmit} className="space-y-8">

                        {/* profile form fullName content */}
                        <div>
                            <FormField control={form.control} name="full_name" render={({ field }) => (
                                <FormItem>
                                    <Label className="block text-gray-700 text-sm md:text-lg font-bold mb-2">Full name</Label>
                                    <FormControl>
                                        <Input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-blue-500" {...field} placeholder="Full name" />
                                    </FormControl>
                                </FormItem>
                            )} />
                        </div>

                        {/* create button of profile form */}
                        <div className="flex items-center justify-between">
                            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create</Button>
                        </div>

                    </form>
                    {/* end form */}
                </Form>
                {/* end Profile Form-content */}

            </div>
            {/* end div */}
        </>
    );
}

// export Profile create form functional component
export default ProfileCreateForm;