import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import "./App.css";
import StarterForm from "./StarterForm";

function App() {
  let startYear = new Date().getFullYear();
  let yearsMap = new Map();
  yearsMap.set(startYear, {
    Fall: [],
    Spring: [],
  });
  const [currYear, setCurrYear] = useState(startYear);
  const [years, setYears] = useState(yearsMap);
  const [standing, setStanding] = useState("freshman");
  const [courses, setCourses] = useState({});

  /**
   * Adds one more year of courses. Cannot add more than four years.
   * @param {*} e event listener
   * @param {*} years map of all years
   */
  const handleAddYear = (e, years) => {
    e.preventDefault();
    let listYears = new Map();
    let newCurrYear = currYear + 1;

    //make copy of all items in years
    for (let [key, value] of years) {
      listYears.set(key, value);
    }

    console.log("list of years", listYears);
    let sizeLimit =
      standing === "freshman"
        ? 4
        : standing === "sophomore"
        ? 3
        : standing === "junior"
        ? 2
        : 1;

    if (years.size < sizeLimit) {
      listYears.set(newCurrYear, { Fall: [], Spring: [] });
      console.log(listYears);
      setYears(listYears);
      setCurrYear(newCurrYear);
    }
  };

  /**
   * removes a course from a given year and semester
   * @param {*} yr the year we want to remove the course from
   * @param {*} sem the semester that we want to remove the course from
   * @param {*} courseName the name of the course we want to remove
   */
  const handleDelete = (yr, sem, courseName) => {
    let listYears = new Map();
    for (let [key, value] of years) {
      listYears.set(key, value);
    }
    listYears.get(yr)[sem] = listYears
      .get(yr)
      [sem].filter((item) => item !== courseName);
    console.log(listYears);
    setYears(listYears);
  };

  /**
   * Adds a course to all courses and also adds the course to the student's course list for the year and semester
   * @param {*} e event listener
   * @param {*} idNum the id of the course
   * @param {*} t the title of the course
   * @param {*} desc the description of the course
   * @param {*} credHours the number of credit hours for the course
   * @param {*} sem the semester in which the course is to be added
   * @param {*} year the year that the course is to be added
   */
  const handleSubmit = (e, idNum, t, desc, credHours, sem, year) => {
    e.preventDefault();

    //adds idNum to courses if it is not already an item in courses
    if (!courses.hasOwnProperty(idNum)) {
      let newCourses = {};
      for (let item in courses) {
        newCourses[item] = courses[item];
      }
      newCourses[idNum] = { title: t, description: desc, credit: credHours };
      setCourses(newCourses);
    }

    let listYears = new Map();

    //make copy of all items in years
    for (let [key, value] of years) {
      listYears.set(key, value);
    }

    //adds idNum to the corect year and semester
    if (!listYears.get(year)[sem].includes(idNum)) {
      listYears.get(year)[sem].push(idNum);
    }
    setYears(listYears);
  };

  return (
    <div className="App">
      <Header />
      <StarterForm
        handleAddYear={handleAddYear}
        years={years}
        courses={courses}
        setCourses={setCourses}
        standing={standing}
        setStanding={setStanding}
      />
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
