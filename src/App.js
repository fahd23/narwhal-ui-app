import "./App.css";
import Navbar from "components/navbar/Navbar";
import Sidenav from "components/sidenav/Sidenav";
import Header from "components/header/Header";
import Content from "components/content/Content";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Navbar />
      <hr />
      <Header />
      <Content />
    </div>
  );
}

export default App;
