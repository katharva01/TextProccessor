import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  
  const [text, setText] = useState("");

  const textChange = (event) => {
    // console.log("text");
    setText(event.target.value);
  };
  const toUpperCase = () => {
    // console.log("first");
    setText(text.toUpperCase());
    props.giveAlert("text converted to uppercase successfully", "success");
  };
  const toLowerCase = () => {
    // console.log("first");
    setText(text.toLowerCase());
    props.giveAlert("text converted to lowercase successfully", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.giveAlert("text copied to clipboard successfully", "success");
  };
  const clearText = () => {
    setText("");
    props.giveAlert("text cleared successfully", "success");
  };


  return (
    <div className=" mx-5 ">
      <div className="mb-3 ">
        <h1>{props.title}</h1>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <textarea
          value={text}
          onChange={textChange}
          placeholder="Enter text to convert"
          className={`form-control w-50 text-${
            props.darkMode === true ? "light" : "dark"
          } bg-${props.darkMode === false ? "light" : "dark"}  `}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button onClick={copyText} className="btn btn-primary m-1">
        copy text
      </button>
      <button onClick={clearText} className="btn btn-primary m-1">
        clear text
      </button>
      <button onClick={toUpperCase} className="btn btn-primary m-1">
        convert uppercase
      </button>
      <button onClick={toLowerCase} className="btn btn-primary m-1">
        convert Lowercase
      </button>
      <div className="text-summary my-4">
        <h3>Text Details :</h3>
        <p>
          This text contains {text.trim().split(" ").length} words and{" "}
          {text.length} letters{" "}
        </p>
      </div>
      <div className="text-preview my-4 ">
        <h3>Preview of text you entered</h3>
        <p className="border">{text}</p>
      </div>
    </div>
  );
}
