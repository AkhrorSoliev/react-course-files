import './App.css';
import { useState } from 'react'

// useState 

function App() {
  const [name, setName] = useState("Ahror")
  const [events, setEvents] = useState([
    {title: "akhror's birthday party", id: 1},
    {title: "doniyor's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])
 
  
  
  const handleClick = () => {
    setName('Doniyor')
  }

  return (
    <div className="App">
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change name</button>
        {events.map((event, index) => {
          return (
            <div key={event.id}>
              <h2> {index} - {event.title} </h2>
            </div>
          )
        })}
    </div>
  );
}

export default App;