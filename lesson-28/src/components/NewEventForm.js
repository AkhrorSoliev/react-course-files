// style
import "./NewEventForm.css";

import { useState } from "react";

function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </label>
      <button>Submit</button>
      <hr />
      <p> Title: {title}</p>
      <p> Date: {date}</p>
    </form>
  );
}

export default NewEventForm;
