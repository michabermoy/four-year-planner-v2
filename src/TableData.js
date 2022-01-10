import { FaTrashAlt } from "react-icons/fa";
const TableData = ({ sem, year, course, semCourse, handleDelete }) => {
  return (
    <tr>
      <td>{semCourse}</td>
      <td>{course.title}</td>
      <td>{course.description}</td>
      <td>{course.credit}</td>
      <td>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(year, sem, semCourse)}
        />
      </td>
    </tr>
  );
};

export default TableData;
