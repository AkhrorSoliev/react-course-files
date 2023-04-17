import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showConent, setShowContent] = useState(true)
  const [events, setEvents] = useState([])

  const newEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event]
    })
    setShowModal(false)
  }

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
        {showConent && <EventList events={events} handleDelete={handleDelete}/>}
        {showModal && <Modal>
          <NewEventForm newEvent={newEvent}/>
        </Modal>}
        <br />
        <br />
        <button onClick={() => {setShowModal(true)}}>New Event</button>
    </div>
  );
}

export default App;