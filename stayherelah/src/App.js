import Home from "./pages/Home";
import Property from "./pages/Property";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Property />
    </Router>
  );
}

export default App;
