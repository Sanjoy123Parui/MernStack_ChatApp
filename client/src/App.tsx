import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routerlayout from "./components/layouts/routerlayout.tsx";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <Routerlayout />
      </QueryClientProvider>
    </>
  );
};

export default App;
