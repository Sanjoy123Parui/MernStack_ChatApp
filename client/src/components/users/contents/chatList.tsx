import ListHeading from "./listHeading.tsx";

// here define chat list functional component
const ChatList: React.FC = () => {
  return (
    <>
      <div>
        <ListHeading />
      </div>

      {/* start div for chat list content */}
      <div className="border-t px-2">
        <h1>Chat List</h1>
      </div>
      {/* end div */}
    </>
  );
};
// export chat list functional component
export default ChatList;
