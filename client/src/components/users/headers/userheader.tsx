import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

// here was define Header component
const Userheaders = () => {

    const [isOpen, setIsOpen] = useState<Boolean>(false);

    let listItems: any[] = [
        { label: 'MyProfile' },
        { label: 'Themes' },
        { label: 'LogOut' }
    ];

    return (
        <>

            {/* start nav */}
            <nav className="bg-indigo-700 sticky font-sans top-0 z-0 p-4">

                {/* start div container */}
                <div className="container mx-auto relative flex justify-between items-center">

                    {/* brand name */}
                    <h1 className="text-white text-lg font-bold">hiChat</h1>

                    {/* start button for open drop-down */}
                    <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        <BsThreeDotsVertical />
                    </button>
                    {/* end button */}

                    {/* start ul for nav link */}
                    <ul className={`${isOpen ? "block" : "hidden"}  md:flex absolute md:relative bg-blue-600 md:bg-transparent w-48 md:w-auto right-0 top-full md:top-auto p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>

                        {listItems.map((items, index) => {
                            
                            return (
                                <li key={index}>
                                    <a href="" className="block text-black md:text-white hover:text-gray-300 transition-colors">
                                        {items.label}
                                    </a>
                                </li>
                            );
                        })}

                    </ul>
                    {/* end ul */}

                </div>
                {/* end div container */}
            </nav>
            {/* end nav */}
        </>
    );

}

export default Userheaders;