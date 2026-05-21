import { useActionState } from "react";
export default function UseActionState() {
    async function submitform(previousstate ,formdata) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (previousstate == 'success') {
            return 'already logged in';
        } else {
        if (formdata.get('username') == "admin" && formdata.get('password') == "8778") {
            return 'success';
        } else {
            return 'invalid credentials';
        }
    }}
    const [state, form, isPending] = useActionState(submitform, 'fill it out');
    return <div style ={{alignItems: "center", display: "flex", flexDirection: "column"}}>
        <h1 style={{marginTop: 10,color: "blue"}}>UseActionState</h1>
        <form action={form}>
            <div style={{display: "flex", flexDirection: "column", gap: 10, width : 200}}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">Submit</button>   
            </div>
        </form>
        <p>{isPending ? 'loading...' : state}</p>
    </div>
}