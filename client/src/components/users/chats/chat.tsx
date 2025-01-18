import { useEffect } from "react";
import ChatList from './chatList.tsx';

// here declare Chat functional component
const Chat: React.FC = () => {

    // here declare useEffect hook
    useEffect(() => {
        return () => { }
    }, []);

    return (
        <>
            <section>
                <ChatList />
            </section>
        </>
    );
}

// export Chat functional component
export default Chat;    