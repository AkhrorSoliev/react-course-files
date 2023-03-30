// style
import "./Modal.css"

function Modal({ children , closeModal}) {
  
  return (
    <div className="modal-backdrop">
        <div className="modal">
           { children }
           <br />
           <button onClick={closeModal}>Close</button>
        </div>
    </div>
  )
}

export default Modal