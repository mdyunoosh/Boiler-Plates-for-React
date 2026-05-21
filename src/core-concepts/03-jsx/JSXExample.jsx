import "../../App.css";
export default function JSXExample() {
    const name='yunooo';
    return( 
        <>
            <h1 className="bg-color">Hello {name} from jsx</h1>
            <p style={{color: "black",backgroundColor: "yellow",border:"10px solid black"}}>This is  paragraph.</p>
        </>
);

}