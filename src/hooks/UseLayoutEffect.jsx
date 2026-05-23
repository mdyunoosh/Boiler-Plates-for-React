import  {useLayoutEffect, useState } from "react";
export default function UseLayoutEffect() {
    const[Color, SetColor] = useState("red");
    useLayoutEffect(() => {
        document.body.style.backgroundColor = Color;
    })
    return <div>
        <h1>UseLayoutEffect</h1>
        <button onClick={() => SetColor("red")}>Change Color</button>
    </div>
}