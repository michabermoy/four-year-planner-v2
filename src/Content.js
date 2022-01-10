import "./Content.css";
import Year from "./Year";
const Content = ({ courses, years, handleDelete, handleSubmit }) => {
  return (
    <main>
      {Object.entries(years).map(([year, val], i) => (
        <Year
          key={i}
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
