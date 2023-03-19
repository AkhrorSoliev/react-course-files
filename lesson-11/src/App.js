import './App.css';
import { useState } from 'react'

// useState 

function App() {
  const [name, setName] = useState("Ahror")
 
  
  
  const handleClick = () => {
    setName('Doniyor')
  }

  return (
    <div className="App">
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;