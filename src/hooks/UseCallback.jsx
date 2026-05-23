import { useCallback, useEffect, useState } from "react"

export default function UseCallback() {
    const [product, setproduct] = useState(1);
    const [price, setprice] = useState(100);
    const [discount, setdiscount] = useState(0);
    const [note, setnote] = useState("");
    useEffect(() => {
        const baseprices={
            1 : 100,
            2 : 200,
            3 : 300
        }
        const newprice=baseprices[product]
        setprice(newprice);
        },[product])
    const calculateDiscount = useCallback(() => {
        console.log("Calculating discount...");
        let ddiscount=0;
    if (product === 1) {
        ddiscount = 0.1;
    } 
    else if (product === 2) {
        ddiscount = 0.2;
    }
    else {
        ddiscount = 0.3;
    }
    const newdiscount = price - price * ddiscount;
    setdiscount(newdiscount);
}, [product, price]);
useEffect(() => {
    calculateDiscount();
}, [calculateDiscount])
    return (
        <div><h1>UseCallback Hook</h1>
        <ul>
            <li>Product Id: {product}</li>
            <li>Product Price: {price}</li>
            <li>Discount: {discount}</li>
            <button onClick={() => setproduct(1)}>Product 1</button>
            <button onClick={() => setproduct(2)}>Product 2</button>
            <button onClick={() => setproduct(3)}>Product 3</button>
            </ul>
            <input onChange={(e) => setnote(e.target.value)} type="text" placeholder="Enter note" />
            <p>{note}</p>
            </div>

    )
}