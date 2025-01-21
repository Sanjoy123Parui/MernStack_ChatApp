import { useEffect } from "react";

// here declare content function component
const Chat: React.FC = () => {

    useEffect(() => {
        return () => { }
    }, []);

    return (
        <>
            {/* start div flex */}
            <div className="flex flex-col md:flex-row  mx-auto h-screen">

                {/* Chat List */}
                <section className="md:w-1/3 w-full border-[1px] border-gray-300 p-4 shadow-md">        
                    <h1 className="text-lg font-semibold">Chat List</h1>
                </section>

                {/* Chat Messages */}
                <section className="hidden md:block md:w-2/3 w-full border-[1px] border-gray-300 p-4 shadow-md">
                    <h1 className="text-lg font-semibold">Chat Messages</h1>
                </section>

            </div>
            {/* end div */}
        </>
    )
}
// export content functional component
export default Chat;