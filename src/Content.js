import "./Content.css";
import Year from "./Year";
const Content = ({ courses, years, handleDelete, handleSubmit }) => {
  return (
    <main>
      {Array.from(years).map(([year, val]) => (
        <Year
          key={year % new Date().getFullYear()}
          courses={courses}
          years={years}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          year={year}
        />
      ))}
    </main>
  );
};

export default Content;
