import React, { useEffect, useState } from 'react'

const useFetch = (urlInput) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInfo = async (url) => {
      try{
        setLoading(true);
        const get = await fetch(url);
        const response = await get.json();
        !response ? await null : await setData(response)
      }
      catch(err){
        setError(err)
      }
      finally{
        setLoading(false);
      }
    };
    fetchInfo(urlInput);
  }, [urlInput])

  return {data, error, loading}
}

export default useFetch