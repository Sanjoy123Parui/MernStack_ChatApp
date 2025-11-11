import { contentMessagesHeading } from "../../models/contentModel.ts";
import { useUserChatContentToggleContext } from "../../hooks/contexts/userContentContext.ts";

// define Contentoptions functional component
const Contentoptions: React.FC<contentMessagesHeading> = ({
  messagesheadingOptions,
}) => {
  // declare custom hooks for manage data
  const { hideContentOptions }: any = useUserChatContentToggleContext();

  return (
    <>
      <div className="absolute top-32 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {messagesheadingOptions.map((item: any, i: any) => (
            <li key={i} onClick={hideContentOptions}>
              <a
                className="block px-4 py-2 hover:bg-gray-100 
              dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// exporting ContentOptions component
export default Contentoptions;
