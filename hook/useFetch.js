import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) =>{
  const [data, setData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '79f9b8c859msh6ab9207a37a0aabp1a927ejsn6848e8bcb26f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query}
  };

  const fecthData = async ()=>{
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)

    } catch (error) {
      setError(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fecthData()
  }, [])
  
  const refetch = () =>{
    setIsLoading(true)
    fecthData()
  }

  return {data, isLoading, error, refetch}
}

export default useFetch;