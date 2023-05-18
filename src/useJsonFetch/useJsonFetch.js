import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const dataList = await response.json();
        setData(dataList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);

  return [data, error, loading];
}