// style
import './TripList.css'
import { useState, useEffect} from "react"


function TripList() {
    const [trips, setTrips] = useState([])

    console.log(trips)

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then((res) => res.json())
        .then((data) => setTrips(data))
    }, [])
   
  return (
    <div className="trip-list">
        <h1>TripList</h1>
        <ul>
            {trips && trips.map((trip) => {
                return (
                    <li key={trip.title}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TripList