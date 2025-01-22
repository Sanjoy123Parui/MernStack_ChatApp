import { useEffect } from "react";

// here define Chats functional components
const Chats: React.FC = () => {

    useEffect(() => {
        return () => { }
    }, []);

    return (
        <>
            {/* start div flex */}
            <div className="flex flex-col md:flex-row mx-auto h-screen">

                {/* ChatList */}
                <section className="md:w-1/3 w-full border-[1px] border-gray-300 p-4 shadow-md h-screen">
                    <div className="flex flex-wrap items-center fixed justify-between max-w-screen-xl mx-auto p-2">
                        <h1 className="text-lg font-semibold">Chat List</h1>
                    </div>
                </section>

                {/* Chat Messages */}
                <section className="hidden md:block md:w-2/3 w-full border-[1px] border-gray-300 p-4 h-screen shadow-md">
                    <h1 className="text-lg font-semibold">Chat Messages</h1>
                </section>


            </div>
            {/* end div flex */}
        </>
    );
}
// export Chats functional components
export default Chats;