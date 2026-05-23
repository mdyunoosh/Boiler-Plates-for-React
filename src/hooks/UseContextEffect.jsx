import { createContext, useContext,useState } from "react";
const UserContext = createContext(null);
export default function UseContextEffect() {
    const [user, setUser] = useState({name :"John", age: 30});
    return <UserContext value={{user,setUser}}>
        <div>
        <Dashboard />
    </div>
    </UserContext>
}

function Dashboard(){
    const {user, setUser} = useContext(UserContext);
    return <div>
        <h1>Welcome to simple context example</h1>
        <h3>user: {user.name}</h3>
        <UserProfile />
        <button onClick={() => setUser({...user, name: "Jane"})}>Change Name</button>
    </div>
}

function UserProfile(){
    const {user, setUser} = useContext(UserContext);
    return <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
    </div>
}