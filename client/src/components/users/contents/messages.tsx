import Senders from "./senders.tsx";

// define Messages component
const Messages: React.FC = () => {
  return (
    <>
      <div className="bg-slate-100 w-auto h-full">
        <div>
          <Senders />
        </div>
      </div>
    </>
  );
};
// export messages component
export default Messages;
