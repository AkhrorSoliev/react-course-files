// style
import "./TripList.css";

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips")
  const {data:trips, isPending, error } = useFetch(url)

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      { isPending && <div><h3>Loading...</h3></div> }
      { error && <div><h3>{error}</h3></div> }
      <ul>
        {trips && trips.map((trip) => {
          return (
            <li key={trip.title}>
              <h2>{trip.title}</h2>
              <p>{trip.price}</p>
            </li>
          );
        })}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=Europe')}>European Trips</button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
      </div>
    </div>
  );
}

export default TripList;
