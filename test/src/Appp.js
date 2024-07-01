import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts", { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className="app-container">
            <h1>Cat Facts</h1>
            <ul className="facts-list">
                {Array.isArray(data) ? (
                    data.map((fact, index) => (
                        <li key={index} className="fact-item">
                            {fact.text}
                        </li>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </ul>
        </div>
    );
}

export default App;