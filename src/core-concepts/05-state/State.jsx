import { useState } from "react";
export default function State(){
    const [count, setCount] = useState(0);
        
    const handClick = () => {
            setCount(count + 1);
        } 
       return <div style ={{textAlign: 'center'}}>
    <h1>State Example</h1>
    <h3>count: {count}</h3>
    <button style={{width: '100px', backgroundColor: 'red', border: '1px solid red', borderRadius: '5px'}} onClick={handClick}>Increment</button>
    </div>
}