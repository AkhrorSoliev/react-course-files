// style
import "./TripList.css";

import { useState, useEffect, useCallback } from "react";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips")

  console.log(trips)

  // useCallback = functionlardi xotiraga saqlaydi (manzillarini)

  const fetchTrips = useCallback(async () => {
    const req = await fetch(url)
    const data = await req.json()
    setTrips(data)
  }, [url]) 

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips]);

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
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=Europe')}>European Trips</button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
      </div>
    </div>
  );
}

export default TripList;
