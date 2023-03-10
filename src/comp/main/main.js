import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

const Home = ({ Movie, setmovieName }) => {
  return (
    <div>
      {Movie.map((item, index) => {
        return (
          <div className="box" key={index}>
            <div>
              {" "}
              <img className="img" src={item.img} />
            </div>

            <div>
              <div>
                {" "}
                <h1 className="name">{item.Name} </h1>
              </div>
              <div>
                <audio className="audio" controls>
                  <source src={item.Song} />
                  play song
                </audio>
              </div>
              <div>
                <a href={item.Link} className="button" target="_blank">
                  Go Movie
                </a>
              </div>
              <div>
                <NavLink
                  className="button"
                  to="/edit"
                  onClick={() => {
                    setmovieName(item.Name);
                  }}
                >
                  Edit
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
