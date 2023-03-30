import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import { Fragment } from 'react';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)
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

  // close modal funciton
  const closeModal = () => {
    setShowModal(false)
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
        {/* <Modal>
            <h2>Akhror Soliev Youtube Channel❤️</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, accusantium?</p>
        </Modal> */}
        {showModal && <Modal closeModal={closeModal}>
          <h1>Akhror Soliev Youtube Channel❤️</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id ex molestiae ut rerum. Est rem vitae sed ut nemo eligendi cumque eius, soluta distinctio suscipit exercitationem nostrum neque at praesentium veniam accusamus? Consequuntur ducimus atque voluptatum numquam corporis blanditiis quae voluptates libero quibusdam, eveniet fugiat ex a illum quos?</p>
          <a href="">Subscripbe</a>
        </Modal>}
        <br />
        <br />
        <button onClick={() => {setShowModal(true)}}>Show Modal</button>
    </div>
  );
}

export default App;