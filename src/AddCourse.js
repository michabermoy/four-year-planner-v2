import "./AddCourse.css";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const AddCourse = ({
  // idNum,
  // setIdNum,
  // title,
  // setTitle,
  // description,
  // setDescription,
  // credHours,
  // setCredHours,
  handleSubmit,
  year,
  sem,
}) => {
  const [idNum, setIdNum] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [credHours, setCredHours] = useState(1);

  const handleClick = (e) => {
    console.log("submitted");
  };
  return (
    <form
      className="addForm"
      id={year + sem}
      onSubmit={(e) =>
        handleSubmit(e, idNum, title, description, credHours, sem, year)
      }
    >
      <label htmlFor="addCourse"></label>
      <input
        autoFocus
        className="course id"
        placeholder="ID"
        required
        value={idNum}
        onChange={(e) => setIdNum(e.target.value)}
      />
      <input
        autoFocus
        className="course title"
        placeholder="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        autoFocus
        className="course desc"
        placeholder="Description"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="credit hours">Credit Hours:</label>
      <select name="credit hours" onClick={(e) => setCredHours(e.target.value)}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button type="submit" aria-label="Add Course">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddCourse;
