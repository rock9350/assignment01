import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { edit } from "../redux/formData";
import { useSelector } from "react-redux";

const Edit = ({ movieName }) => {
  const { arr: Movie } = useSelector((state) => state.arr);
  let Data = [...Movie];
  const filter = Data.filter((item) => {
    return item.Name == movieName;
  });

  const dispatch = useDispatch();

  const [Form, setForm] = useState({
    Name: "",
    Link: "",
    Genres: "Entertainment",
    img: "",
    Song: "",
  });

  useEffect(() => {
    setForm({ ...filter[0] });
  }, []);

  const onSubmit = () => {
    dispatch(edit(Form));
    console.log(Form);
  };

  const onEdit = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
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
          Movie Link
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
          Movie Genres
        </label>
        <select name="Genres" onChange={onEdit} value={Form.Genres}>
          <option>Entertainment</option>
          <option>Education</option>
          <option>Action</option>
          <option>Love</option>
        </select>

        <label className="label" htmlFor="Link">
          Movie Img
        </label>
        <input
          type="text"
          name="img"
          onChange={onEdit}
          value={Form.img}
        ></input>

        <NavLink id="add" to="/" onClick={onSubmit}>
          Edit Movie
        </NavLink>
      </form>
    </>
  );
};

export default Edit;
