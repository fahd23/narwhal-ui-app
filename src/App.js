import "./App.css";
import Navbar from "components/navbar/Navbar";
import Sidenav from "components/sidenav/Sidenav";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Navbar />
    </div>
  );
}

export default App;
