import "./App.css";
import HomePage from "Pages/HomePage";
import { ContentTeamsProvider } from "context/ContentContext";

function App() {
  return (
    <div className="App">
      <ContentTeamsProvider>
        <HomePage />
      </ContentTeamsProvider>
    </div>
  );
}

export default App;
