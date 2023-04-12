import { Fragment } from "react";

function EventList({ events, handleDelete }) {
  return (
    <div>
      {events.length === 0 && <h3>Not Conent Yet :(</h3>}
      {events.map((event) => {
        return (
          <Fragment key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </Fragment>
        );
      })}
    </div>
  );
}

export default EventList;
