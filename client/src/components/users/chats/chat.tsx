import ChatList from './chatList.tsx';
import ChatMessage from './chatMessage.tsx';
import ChatProfile from './chatProfile.tsx';

// here declare Chat functional component
const Chat: React.FC = () => {

    return (
        <>
            <div className="flex">
                <section>
                    <ChatList />
                </section>
                <div>
                    <ChatMessage />
                </div>
                <section>
                    <ChatProfile />
                </section>
            </div>
        </>
    );
}

// export Chat functional component
export default Chat;