import Home from "./pages/Home";
import Property from "./pages/Property";
import Estimate from "./pages/Estimate";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/bto/mature" element={<Property />}>
          <Route path=":id" element={<Property />} />
        </Route>

        <Route path="/bto/nonmature" element={<Property />}>
          <Route path=":id" element={<Property />} />
        </Route>

        <Route
          path="/bto/nonmature/:id/estimate"
          element={<Estimate />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
