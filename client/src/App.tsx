import "./App.css";
import Routerlayout from "./components/layouts/routerlayout.tsx";
import { AppProvider } from "./components/providers/contextproviders.tsx";

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Routerlayout />
      </AppProvider>
    </>
  );
};

export default App;
