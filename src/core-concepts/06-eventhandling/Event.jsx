import { useState } from "react";
export default function Event(){
    const [text, setText] = useState("");
    const hand = (e) => {
        setText(e.target.value);
    };
    return <>
    <h1>Event Handling Example</h1>
    <input type="text" onChange={hand} placeholder="Enter text here..." />
    <p>{text}</p>
    </>
    }