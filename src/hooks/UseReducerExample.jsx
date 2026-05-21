import { useReducer } from "react";
import "./UseReducerExample.css" 
const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return {state, count: state.count + 1};
            case "decrement":
                return {state, count: state.count - 1}; 
            default:
                break;
        }
    };
const InitialState = {count: 0};
export default function UseReducerExample() {
    const [state, dis] = useReducer(reducer, InitialState);
    
    return <div>
        <h1 style={{marginTop: 10,color: "blue"}}>UseReducerExample</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dis({type: "increment"})}>Increment</button>
        <button onClick={() => dis({type: "decrement"})}>Decrement</button>
    </div>
}