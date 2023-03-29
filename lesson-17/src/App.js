import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import { Fragment } from 'react';

function App() {
  const [showConent, setShowContent] = useState(true)
  const [events, setEvents] = useState([
    {title: "akhror's birthday party", id: 1},
    {title: "doniyor's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])
  
  // delete items
  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id 
      })
    }) 
  }

  const subtitle = "All events well be here :)"

  return (
    <div className="App">
        <Title title="Akhror's Kingdom👑 Events" subtitle={subtitle}/>
        {showConent && <button onClick={() => setShowContent(false)}>Hide Conent</button>}
        {!showConent && <button onClick={() => setShowContent(true)}>Show Conent</button>}
        {showConent && <div>
          {events.length === 0 && <h3>Not Conent Yet :(</h3>}
         {events.map((event) => {
          return (
            <Fragment key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </Fragment>
          )
        })} </div>}
    </div>
  );
}

export default App;