import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import "./App.css";
import StarterForm from "./StarterForm";

function App() {
  const [currYear, setCurrYear] = useState(2023);
  const [years, setYears] = useState({
    2023: {
      Fall: [],
      Spring: [],
    },
  });

  const [courses, setCourses] = useState({});

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
      <StarterForm
        handleAddYear={handleAddYear}
        years={years}
        courses={courses}
        setCourses={setCourses}
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
