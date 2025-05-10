import Sender from "./sender.tsx";
import Reciever from "./reciever.tsx";

// define Messages component
const Messages: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 bg-slate-100 p-4 w-full h-full flex-col">
        <Sender />
        <Reciever />
      </div>
    </>
  );
};
// export messages component
export default Messages;
