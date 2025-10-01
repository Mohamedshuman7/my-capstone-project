import "./App.css";
import Showlist from "./components/Showlist/Showlist";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Showlist />
      </main>
    </div>
  );
};

export default App;
