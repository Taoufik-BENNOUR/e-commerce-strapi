import { useEffect, useState } from "react"
import { makeRequest } from "./makeRequest"

const useFetch = (url) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProducts = async()=>{
        setLoading(true);
      try {
        const response = await makeRequest.get(url)
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
       setError(error);
      }
    }
    fetchProducts();
  }, [])

  return {data,loading,error};
}

export default useFetch;