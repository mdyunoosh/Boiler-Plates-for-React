import { useFormStatus } from "react-dom";
function USe() {
  const { pending } = useFormStatus();
  return <button>{pending ? 'submitting...' : 'submit'}</button>;
}
export default function UseFormStatus() {
    async function submitform(previousstate ,formdata) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('form submitted');
}
    return <div style ={{alignItems: "center", display: "flex", flexDirection: "column"}}>
        <h1 style={{marginTop: 10,color: "blue"}}>UseFormStatus</h1>
        <form action={submitform}>
            <div style={{display: "flex", flexDirection: "column", gap: 10, width : 200}}>
                <USe /> 
            </div>
        </form>
        
    </div>
}
