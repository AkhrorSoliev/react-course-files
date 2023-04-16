// style
import "./Modal.css"
import ReactDOM from 'react-dom'

function Modal({ children }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal card" style={{
            border: '4px solid',
            borderColor: 'yellowgreen',
            textAlign: 'center'
          }}>
           { children }
        </div>
    </div>
  ), document.body)
}

export default Modal