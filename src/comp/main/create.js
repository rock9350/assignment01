import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Movie from "../../movie";
import { create } from "../redux/formData";
import "./create.css";

const Create = (props) => {
  const initialData = {
    id: "",
    Name: "",
    Link: "",
    Genres: "Entertainment",
    img: "",
    Song: "",
  };


  const dispatch = useDispatch()
  const arrr =  useSelector((state) => state.arr)

  const [Form, setForm] = useState(initialData);

  const onSubmit = () => {
    dispatch(create(Form))
  };

  const onEdit = (e) => {
    let count = Movie.length + 1;

    setForm({ ...Form, [e.target.name]: e.target.value, id: `${count}` });
  };

  const onForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form id="form" onSubmit={onForm}>
        <label className="label" htmlFor="Name">
          Movie Name
        </label>

        <input type="text" name="Name" onChange={onEdit} value={Form.Name} />
        <label className="label" htmlFor="Link">
          Movie Link{" "}
        </label>
        <input
          type="text"
          name="Link"
          onChange={onEdit}
          value={Form.Link}
        ></input>

        <label className="label" htmlFor="Song">
          Movie Mp3{" "}
        </label>
        <input
          type="text"
          name="Song"
          onChange={onEdit}
          value={Form.Song}
        ></input>

        <label className="label" htmlFor="Genres">
          Movie Genres{" "}
        </label>
        <select name="Genres" onChange={onEdit}>
          <option>Entertainment</option>
          <option>Education</option>
          <option>Action</option>
          <option>Love</option>
        </select>

        <label className="label" htmlFor="Link">
          Movie Img{" "}
        </label>
        <input
          type="text"
          name="img"
          onChange={onEdit}
          value={Form.img}
        ></input>

        <NavLink id="add" to="/" onClick={onSubmit}>
          Add to list
        </NavLink>
      </form>
    </>
  );
};

export default Create;
