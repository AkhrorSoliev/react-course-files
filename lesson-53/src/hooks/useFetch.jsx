import { useEffect, useState } from "react"

export function useFetch(url) {
 const [data, setData] = useState(null)
 const [isPending, setIsPending] = useState(false)
 const [error, setError] = useState(null)

 useEffect(() => {
    const fetchData = async () => {
       setIsPending(true)
       try {
        const req = await fetch(url)
        if (!req.ok) {
            throw new Error(req.statusText)
        }
        const data = await req.json()
        setData(data)
        setIsPending(false)
       }
      catch (err) {
        setError(err.message)
        console.log(err.message)
        setIsPending(false)
      }
    }
    fetchData()
 }, [url])

 return { data, isPending, error }
}