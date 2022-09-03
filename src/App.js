import "./App.css";
import Navbar from "components/navbar/Navbar";
import Sidenav from "components/sidenav/Sidenav";
import Header from "components/header/Header";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Navbar />
      <Header/>
    </div>
  );
}

export default App;
