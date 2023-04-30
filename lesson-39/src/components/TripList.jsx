// style
import "./TripList.css";

import { useState, useEffect } from "react";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  console.log(trips);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, [url]);

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      <ul>
        {trips.map((trip) => {
          return (
            <li key={trip.title}>
              <h2>{trip.title}</h2>
              <p>{trip.price}</p>
            </li>
          );
        })}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}

export default TripList;
