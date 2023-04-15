// style
import "./Modal.css"
import ReactDOM from 'react-dom'

function Modal({ children, closeModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal card" style={{
            border: '4px solid',
            borderColor: 'red',
            textAlign: 'center'
          }}>
           { children }
        </div>
    </div>
  ), document.body)
}

export default Modal