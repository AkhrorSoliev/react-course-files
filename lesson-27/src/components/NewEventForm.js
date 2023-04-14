// style
import './NewEventForm.css'

function NewEventForm() {
  return (
    <form className="new-event-form">
        <label>
            <span>Event Title:</span>
            <input type="text" />
        </label>
        <label>
            <span>Event Date:</span>
            <input type="date" />
        </label>

        <button>Submit</button>
    </form>
  )
}

export default NewEventForm