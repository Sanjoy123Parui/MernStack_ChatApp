import { useEffect } from "react";
import ListContent from './contents/listContent.tsx';

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
                <div className="md:w-1/3 w-full border-[1px] border-gray-300 p-4 shadow-md h-screen">
                    <ListContent />
                </div>

                {/* Chat Messages */}
                <div className="hidden md:block md:w-2/3 w-full border-[1px] border-gray-300 p-4 h-screen shadow-md">
                    <h1 className="text-lg font-semibold">Chat Messages</h1>
                </div>

            </div>
            {/* end div flex */}
        </>
    );
}
// export Chats functional components
export default Chats;