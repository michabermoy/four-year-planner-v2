import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [currYear, setCurrYear] = useState(2023);
  const [years, setYears] = useState({
    2023: {
      Fall: ["BME1015"],
      Spring: ["AMER1001"],
    },
  });

  const [courses, setCourses] = useState({
    BME1015: {
      title: "Innovations in Biomedical Engineering",
      description:
        "Review of areas within the field of BME. Topics include current research and industry trends in imaging, regenerative medicine, biophotonics, medical devices, technology and entrepreneurship, and low resource engineering. Open only to first-year and transfer students. Students in the School of Engineering receive open elective credit for BME 1015. ",
      credit: 1,
    },
    AMER1001: {
      title: "Commons iSeminar",
      description:
        "Topics vary. General Elective credit only. (No AXLE Credit) ",
      credit: 1,
    },
  });

  const handleAddYear = (e, years) => {
    e.preventDefault();
    let listYears = {};
    let newCurrYear = currYear + 1;

    //make copy of all items in years
    for (let item in years) {
      listYears[item] = years[item];
    }

    if (Object.keys(years).length < 4) {
      listYears[newCurrYear] = { Fall: [], Spring: [] };
      console.log(listYears);
      setYears(listYears);
      setCurrYear(newCurrYear);
    }
  };

  const handleDelete = (yr, sem, courseName) => {
    let listYears = {};
    for (let item in years) {
      listYears[item] = years[item];
    }
    listYears[yr][sem] = listYears[yr][sem].filter(
      (item) => item !== courseName
    );
    setYears(listYears);
  };

  const handleSubmit = (e, idNum, t, desc, credHours, sem, year) => {
    e.preventDefault();
    let listYears = {};

    //make copy of all items in years
    for (let item in years) {
      listYears[item] = years[item];
    }

    //adds idNum to courses if it is not already an item in courses
    if (!courses.hasOwnProperty(idNum)) {
      let newCourses = {};
      for (let item in courses) {
        newCourses[item] = courses[item];
      }
      newCourses[idNum] = { title: t, description: desc, credit: credHours };
      setCourses(newCourses);
    }

    //adds idNum to the corect year and semester
    if (!listYears[year][sem].includes(idNum)) {
      listYears[year][sem].push(idNum);
    }
    setYears(listYears);
  };

  return (
    <div className="App">
      <Header />
      <div className="starter-form">
        <form>
          <label hnpm stmlFor="current standing">
            Current Standing:{" "}
          </label>

          <select name="current standing" id="cur-standing">
            <option value="freshman">freshman</option>
            <option value="sophomore">sophomore</option>
            <option value="junior">junior</option>
            <option value="senior">senior</option>
          </select>

          <button type="button" onClick={(e) => handleAddYear(e, years)}>
            Add Year
          </button>
        </form>
      </div>
      <Content
        courses={courses}
        years={years}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        handleAddYear={handleAddYear}
      />
      <Footer />
    </div>
  );
}

export default App;
