import {useEffect,useState } from "react";
export default function UseEffect() {
    const[Data, SetData] = useState(null);
    const[error, Seterror] = useState(null);
    const[loading, setLoading] = useState (false);
    function fetchtext(){
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                SetData(data);
                setLoading(false);
                
            })
            .catch(error => {
                Seterror(error);
                setLoading(false);
            });

    }
    if (loading){
        return <p>Loading...</p>;
    }
    if (error){
        return <p>Error: {error.message}</p>;
    }
    return <div>
        <button onClick={fetchtext}>Fetch Data</button>
         <ul>
                        {Data && Data.map(item => 
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        </li>)}
                    </ul>
    </div>
}