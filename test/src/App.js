import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://cat-fact.herokuapp.com/facts", { method: "GET" })
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       })
//       .catch((e) => console.log(e));
//   }, []);

//   return (
//     <div className="app-container">
//       <h1>Cat Facts</h1>
//       <ul className="facts-list">
//         {Array.isArray(data) ? (
//           data.map((fact, index) => (
//             <li key={index} className="fact-item">
//               {fact.text}
//             </li>
//           ))
//         ) : (
//           <p>No data available</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;