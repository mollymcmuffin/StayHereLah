import Home from "./pages/Home";
import Property from "./pages/Property";
import Estimate from "./pages/Estimate";
import Explore from "./pages/Explore";
import BtoProjects from "./pages/BtoProjects";
import ExploreNew from "./pages/ExploreNew";
import NeighbourhoodSelection from "./pages/NeighbourhoodSelection";
import Googlemap from "./pages/Googlemap";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Mortgage from "./pages/Mortgage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/btoprojects/mature" element={<Property />}>
          <Route path=":id" element={<Property />} />
        </Route>

        <Route path="/btoprojects/nonmature" element={<Property />}>
          <Route path=":id" element={<Property />} />
        </Route>
        <Route path="/explore" element={<Explore />}></Route>

        <Route path="/btoprojects" element={<BtoProjects />}></Route>

        <Route path="/mortgage" element={<Mortgage />}></Route>

        <Route path="/estimate" element={<Estimate />}></Route>

        <Route path="/neighbourhood" element={<NeighbourhoodSelection />}>
          <Route path=":id" element={<NeighbourhoodSelection />} />
        </Route>
        <Route path="/googlemap" element={<Googlemap />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
