import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./comp/main/create";
import Home from "./comp/main/main";
import Navbar from "./comp/nav/nav";
import { useState } from "react";
import Edit from "./comp/main/edit";

function App() {
  const [movieName, setmovieName] = useState();
 


  return (
    <div className="App">
      {console.log(movieName)}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home setmovieName={setmovieName} />}
        />
        <Route path="/create" element={<Create />} />
        <Route
          path="/edit"
          element={<Edit movieName={movieName} />}
        />
      </Routes>
    </div>
  );
}

export default App;
