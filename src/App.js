import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./comp/main/create";
import Home from "./comp/main/main";
import Navbar from "./comp/nav/nav";
import { useEffect, useState } from "react";
import Movie from "./movie";
import Edit from "./comp/main/edit";

function App() {
  const [data, setdata] = useState();
  const [movieName, setmovieName] = useState();
  const [show, setshow] = useState(Movie);
 
  useEffect(() => {
    if (data != undefined) {
      let Movies = [...Movie, data];
      setshow(Movies);
    }
  }, [data]);

  function getEdit(e) {
    console.log(show);
    for (let i = 0; i < show.length; i++) {
      if (show[i].id == e.id) {
       show[i] = e ;
      
      }
    }
  }

  function getting(e) {
    setdata(e);
  }

  return (
    <div className="App">
      {console.log(movieName)}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home Movie={show} setmovieName={setmovieName} />}
        />
        <Route path="/create" element={<Create get={getting} />} />
        <Route
          path="/edit"
          element={<Edit get={getEdit} Movie={show} movieName={movieName} />}
        />
      </Routes>
    </div>
  );
}

export default App;
