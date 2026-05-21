import { useState } from "react"
export default function UseStateExample() {
    const [showText, setShowText] = useState(false)

    return <div>
        <button onClick={() => setShowText(!showText)}>
            {showText ? "hide text" : "show text"}
        </button>
        {showText && <p>this is the text that gets toggled</p>}
    </div>
}