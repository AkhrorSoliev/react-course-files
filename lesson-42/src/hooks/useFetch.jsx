import { useEffect, useState } from "react"

export function useFetch(url) {
 const [data, setData] = useState(null)
 const [isPending, setIsPending] = useState(false)

 useEffect(() => {
    const fetchData = async () => {
        setIsPending(true)
        const req = await fetch(url)
        const data = await req.json()
        setData(data)
        setIsPending(false)
    }
    fetchData()
 }, [url])

 return { data,isPending }
}

