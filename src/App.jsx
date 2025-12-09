import { useState } from "react";

export default function App() {
    const [name, setName] = useState("");
    const [savedUser, setSavedUser] = useState(null);
    
    const handleSave = () => {
        const user = {
            name: name,
            role: "student"
        };
        localStorage.setItem("Name", JSON.stringify(user));
        setSavedUser(user);
    }
    
    return (
        <>
        <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        {savedUser && (
            <>
                <p>Name: {savedUser.name}</p>
                <p>Role: {savedUser.role}</p>
            </>
        )}
    </>
    );
}
