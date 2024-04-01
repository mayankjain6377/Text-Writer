import React, { useState } from "react";
export default function TextForm(props) {
  document.body.style.backgroundColor = "azure";
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "azure",
  });
  const [text, setText] = useState("");
  const [btntext] = useState("Change Mode");
  let Togglestyle = () => {
    if (mystyle.color === "white") {
      setMystyle({
        color: "black",
        backgroundColor: "azure",
      });
    } else
      setMystyle({
        color: "white",
        backgroundColor: "#07090f",
      });
  };
  const handleupclick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowclick = () => {
    let lower = text.toLowerCase();
    setText(lower);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleclear = () => {
    setText("");
  };
  const handlecopy = () => {
    let text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const ExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <section className="complete" style={mystyle}>
        <form>
          <div className="enable">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                onClick={Togglestyle}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label class="form-check-label" for="flexSwitchCheckChecked">
                {btntext}
              </label>
            </div>
          </div>
          <h5 className="counter">
            {text.split(" ").length} Word and {text.length} Character
          </h5>
          <strong>
            Time- {0.008 * text.split(" ").length} Minutes to Read
          </strong>
          <br />
          <h4 className="h2">{props.heading}</h4>
          <div class=" mb-3">
            <textarea
              style={mystyle}
              class="form-control mx-5 my-5 "
              value={text}
              onChange={handleonchange}
              id="myBox "
              rows="12"
              placeholder="Write text here"
            ></textarea>
          </div>
          <div className="parent">
            <button type="button" className="btns" onClick={handleupclick}>
              Convert to upercase
            </button>
            <button type="button" className="btns " onClick={handlelowclick}>
              Convert to lowercase
            </button>
            <button type="button" className="btns " onClick={handleclear}>
              Clear textarea
            </button>
            <button type="button" className="btns " onClick={handlecopy}>
              Copy text
            </button>
            <button type="button" className="btns " onClick={ExtraSpace}>
              Remove Extra spaces
            </button>
          </div>
        </form>
        <br />
        <h4 className="preview">Preview</h4>
        <div className="hide">
          <p>{text}</p>
        </div>
      </section>
    </>
  );
}
