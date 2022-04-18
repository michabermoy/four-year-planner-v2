import "./Year.css";
import CourseTable from "./CourseTable";
const Year = ({ courses, years, handleDelete, handleSubmit, year }) => {
  return (
    <div className="flex-container">
      <div>{year}</div>
      <div className="flex-container">
        <div className="flex-child Fall">
          Fall
          <CourseTable
            courses={courses}
            year={year}
            sem="Fall"
            semCourses={years.get(year).Fall}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="flex-child Spring">
          Spring
          <CourseTable
            courses={courses}
            year={year}
            sem="Spring"
            semCourses={years.get(year).Spring}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Year;
