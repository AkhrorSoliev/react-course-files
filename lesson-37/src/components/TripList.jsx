import { useEffect, useState } from "react"

function TripList() {
    const [trips, setTrips] = useState([])

    console.log(trips)

    fetch('http://localhost:3000/trips')
    .then((res) => res.json())
    // .then((data) => setTrips(data))

  return (
    <div>
        <h1>TripList</h1>
    </div>
  )
}

export default TripList