import "./CourseTable.css";
import AddCourse from "./AddCourse";
import TableData from "./TableData";

const CourseTable = ({
  courses,
  year,
  sem,
  semCourses,
  handleDelete,
  handleSubmit,
}) => {
  return (
    <div>
      <AddCourse handleSubmit={handleSubmit} year={year} sem={sem} />

      <table>
        <tbody>
          <tr>
            <th width="70px">Id</th>
            <th width="150px">Title</th>
            <th>Description</th>
            <th width="100px">Credit Hours</th>
          </tr>

          {semCourses.map((semCourse) => (
            <TableData
              key={courses[semCourse].title}
              sem={sem}
              year={year}
              semCourse={semCourse}
              course={courses[semCourse]}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
