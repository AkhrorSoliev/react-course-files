// style
import style from  './EventList.module.css'

function EventList({ events, handleDelete }) {
  return (
    <div>
      {events.length === 0 && <h3>Not Conent Yet :(</h3>}
      {events.map((event) => {
        return (
          <div className={style['card']} key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;
