import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";
import Swal from "sweetalert2";
import "./styles/Quiz.css";
import Reset from "./Reset";
import Score from "./Score";
import Form from "./Form";

function Quiz() {
  const global = useContext(GlobalContext);
  const [answerValue, setSelected] = useState([]);
  const [globalNum, setGlobalNum] = useState(0);
  const [score, setScore] = useState(0);
  const [questionNum, setQuestionNum] = useState(1);
  const [checked, setChecked] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  useEffect(() => {
    //On each submit, set all checkboxes to false
    setChecked((prevState) => {
      const newChecked = {};
      Object.keys(prevState).forEach((key) => {
        newChecked[key] = false;
      });
      return newChecked;
    });
  }, [globalNum]);

  const questionSubmit = (e) => {
    e.preventDefault();
    if (answerValue == "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Choose an option!",
        showConfirmButton: false,
        timer: 900,
      });
      return;
    }
    if (answerValue == global[globalNum].answer) {
      setScore((prevState) => prevState + 10);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Wrong answer!",
        showConfirmButton: false,
        timer: 800,
      });
    }
    setQuestionNum((prevState) => prevState + 1);
    setSelected([]);
    setGlobalNum(globalNum + 1);
  };

  const optionSelected = ({ target }) => {
    setChecked({ ...checked, [target.id]: true });
    if (target.checked) {
      if (answerValue.length >= 1) {
        setChecked({ ...checked, [target.id]: false });
        return;
      }
      setSelected([...answerValue, target.value]);
    } else {
      setChecked({ ...checked, [target.id]: false });
      setSelected(answerValue.filter((option) => option !== target.value));
    }
  };

  const restartQuiz = () => {
    setGlobalNum(0);
    setScore(0);
    setQuestionNum(1);
    setSelected([]);
  };

  if (globalNum > 6) return <Reset score={score} restart={restartQuiz} />;

  return global ? (
    <div className="container">
      <Form
        questionSubmit={questionSubmit}
        global={global}
        globalNum={globalNum}
        optionSelected={optionSelected}
        checkedOpt={checked}
      />
      <Score score={score} questionNum={questionNum} />
    </div>
  ) : null;
}

export default Quiz;
