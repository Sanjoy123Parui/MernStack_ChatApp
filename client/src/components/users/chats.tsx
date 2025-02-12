import { useEffect } from "react";
import ChatList from "./contents/chatList.tsx";
import Messages from "./contents/messages.tsx";

// here define Chats functional components
const Chats: React.FC = () => {
  // declare useEffect hook
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {/* start div grid-layout */}
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-8">
        {/* start first section of chatList content */}
        <section className="col-auto border w-full h-full lg:col-span-3">
          <ChatList />
        </section>
        {/* end first section */}
        {/* start second section of messages content */}
        <section className="col-auto border w-full h-full lg:col-span-5">
          <Messages />
        </section>
        {/* end second section */}
      </div>
      {/* end div */}
    </>
  );
};
// export Chats functional components
export default Chats;
