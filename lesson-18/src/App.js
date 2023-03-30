import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
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

  let subtitle = "All events well be here :)"

  return (
    <div className="App">
        <Title title="Akhror's Kingdom👑 Events" subtitle={subtitle}/>
        <br />
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

        <Modal>
          <h2>Akhror Web Youtube Channel❤️</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente porro amet iure ex ullam nemo sint nobis facere fugit. Quam nobis blanditiis non ipsum, numquam, sunt eveniet tempora culpa velit libero dolore eos rerum debitis similique esse tenetur maxime eaque laborum ad doloremque, alias vel. Dicta temporibus at architecto quis?</p>
          <a href="">Subscribe</a>
        </Modal>
    </div>
  );
}

export default App;