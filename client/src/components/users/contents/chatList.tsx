import SearchContent from './searchContent.tsx';

// here was declare chatList component
const ChatList: React.FC = () => {



  return (
    <>
      {/* start div for chatList heading */}
      <div className="bg-purple-600 py-2 md:py-3 lg:py-4">
        <div className="mb-0 px-8">
          <h1 className="text-white text-sm md:text-lg lg:text-2xl font-bold">
            Chats
          </h1>
        </div>
      </div>
      {/* end div */}

      {/* start div for search content of chat */}
      <div>
        <SearchContent />
      </div>
      {/* end div */}
    </>
  );
};
// export chatList
export default ChatList;
