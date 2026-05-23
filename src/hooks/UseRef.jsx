import { useRef } from "react"

export default function UseRef() {
    const inputRef = useRef();
    return <div>
        <h1>UseRef</h1>
        <input ref={inputRef} type="text" placeholder="Enter text" />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
}
    