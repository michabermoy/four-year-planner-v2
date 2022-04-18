import { FaGripLines } from "react-icons/fa";
import "./StarterForm.css";
const StarterForm = ({
  handleAddYear,
  years,
  courses,
  setCourses,
  standing,
  setStanding,
}) => {
  let courseDB = {};
  let fileReader;

  /**
   * stores all of the courses listed in file submitted as an object
   * @param {*} e event listener
   */
  const handleFileRead = (e) => {
    const content = fileReader.result.split(/\r\n|\n/);
    // console.log(content);
    let currentCourse = "";
    let i = 0;

    let [currCourseID, currCourseName] = content[0].split(" - ");
    courseDB[currCourseID] = {
      title: currCourseName,
      description: "",
      credit: undefined,
    };
    for (var line = 1; line < content.length - 1; line++) {
      if (content[line - 1] == "") {
        [currCourseID, currCourseName] = content[line].split(" - ");
        courseDB[currCourseID] = {
          title: currCourseName,
          description: "",
          credit: undefined,
        };
      } else if (
        content[line] !== "Course Description" &&
        content[line] !== ""
      ) {
        courseDB[currCourseID].description += content[line] + " ";
      }
    }
    delete courseDB[""];

    for (let item in courseDB) {
      let ch = courseDB[item].description.split("[");
      if (ch.length == 2) {
        courseDB[item].description = ch[0];
        ch = ch[1].split("]")[0];
        if (ch == "1" || ch == "2" || ch == "3" || ch == "4") {
          courseDB[item].credit = Number(ch);
        }
      }
    }
    console.log(courseDB);
    setCourses(courseDB);
  };

  /**
   * Reads the file submitted
   * @param {*} file file submited
   */
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onload = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div className="starter-form">
      <form>
        <div>
          <label htmlFor="current standing">Current Standing: </label>
          <select
            name="current standing"
            id="cur-standing"
            onClick={(e) => {
              setStanding(e.target.value);
            }}
          >
            <option value="freshman">freshman</option>
            <option value="sophomore">sophomore</option>
            <option value="junior">junior</option>
            <option value="senior">senior</option>
          </select>
        </div>
        <div>
          <label htmlFor="file input">Course Catalog: </label>
          <input
            type="file"
            id="courses-file"
            accept=".txt"
            onChange={(e) => handleFileChosen(e.target.files[0])}
          ></input>
        </div>

        <button type="button" onClick={(e) => handleAddYear(e, years)}>
          Add Year
        </button>
      </form>
    </div>
  );
};

export default StarterForm;
