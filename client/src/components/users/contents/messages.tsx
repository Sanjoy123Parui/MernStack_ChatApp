import Senders from "./senders.tsx";

// define Messages component
const Messages: React.FC = () => {
  return (
    <>
      {/* start div for all messages conversation content */}
      <div className="bg-slate-100 w-auto h-full">
        <Senders />
      </div>
      {/* end div */}
    </>
  );
};
// export messages component
export default Messages;
