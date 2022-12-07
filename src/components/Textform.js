import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        //console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handlelowclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleclearclick=()=>{
        let newText="";
        setText(newText);
    }
    const onchangehandler=(event)=>{
        //console.log("onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div>
            <div className="my-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={onchangehandler} id="My text" rows="8"></textarea>
            </div>
                <button className="btn btn-outline-primary mx-2" onClick={handleupclick}>Make the text Uppercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handlelowclick}>Make the text Lowercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleclearclick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text length</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>it will take {0.008 * text.split(" ").length} Minutes for u to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}

Textform.defaultProps={
    heading:"put heading here"
};