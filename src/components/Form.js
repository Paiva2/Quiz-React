import React from "react";
import "./styles/Form.css";

const Form = ({
  questionSubmit,
  global,
  globalNum,
  optionSelected,
  checkedOpt,
}) => {
  return (
    <form onSubmit={questionSubmit}>
      <h1> {global[globalNum].question}</h1>
      <div className="wrapper">
        <div className="labels">
          <label>A - {global[globalNum].a}</label>
          <label>B - {global[globalNum].b}</label>
          <label>C - {global[globalNum].c}</label>
          <label>D - {global[globalNum].d}</label>
        </div>
        <div className="inputs">
          <input
            type="checkbox"
            name="a"
            id="a"
            onChange={optionSelected}
            value={global[globalNum].a}
            checked={checkedOpt.a}
          />
          <input
            type="checkbox"
            name="b"
            id="b"
            onChange={optionSelected}
            value={global[globalNum].b}
            checked={checkedOpt.b}
          />
          <input
            type="checkbox"
            name="c"
            id="c"
            onChange={optionSelected}
            value={global[globalNum].c}
            checked={checkedOpt.c}
          />
          <input
            type="checkbox"
            name="d"
            id="d"
            onChange={optionSelected}
            value={global[globalNum].d}
            checked={checkedOpt.d}
          />
        </div>
      </div>
      <button className="submit">Confirm</button>
    </form>
  );
};

export default Form;
