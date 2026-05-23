import { useState, useMemo } from "react";
export default function UseMemo() {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
    const filteredFruits = useMemo(() => {
    console.log("Filtering fruits...");
    return fruits.filter((fruit) => fruit.toLowerCase().includes(search.toLowerCase()));
    }, [search]);
  return (
    <div>
      <h1>UseMemo</h1>
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Fruits" />
      <h1>Fruits List</h1>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}