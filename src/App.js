import Form from "./components/Form";
import { GlobolProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import HeaderCard from "./components/HeaderCard";
import History from "./components/History";

function App() {
  return (
    <GlobolProvider>
      <div className="main__wrapper">
        <Header />
        <HeaderCard />
        <History />
        <Form />
      </div>
    </GlobolProvider>
  );
}

export default App;
