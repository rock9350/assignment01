import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import { useSelector , useDispatch } from "react-redux";
import { deletes } from "../redux/formData";

const Home = ({ setmovieName }) => {
  const { arr: Movie } = useSelector((state) => state.arr);

 const dispatch = useDispatch()

 function remove(e){
  console.log(e.target.name);
       dispatch(deletes(e.target.name))

 }


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
              <div>
             <button className="button" name={item.id} onClick={remove}>delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
