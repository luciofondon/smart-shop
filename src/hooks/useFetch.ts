import { useEffect, useRef, useState } from 'react';
import { getHoursDiff } from '../utils/date-util';

const EXPIRATION_HOUR = Number(process.env.REACT_APP_EXPIRATION_CACHE_HOUR);

const useFetch = <S>(url: string, key: string, initialState: S): { data: S } => {
  const [data, setData] = useState<S>(initialState);

  useEffect(() => {
    const fetchCacheData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem(
        key,
        JSON.stringify({
          date: new Date(),
          data,
        }),
      );
      setData(data);
    }

    (async () => {
      const result = localStorage.getItem(key);
      if (result) {
        const dataLocalStorage = JSON.parse(result);
        const date = new Date(dataLocalStorage.date);
        if (getHoursDiff(date, new Date()) > EXPIRATION_HOUR) {
          localStorage.removeItem(key);
          await fetchCacheData();
        } else {
          setData(dataLocalStorage.data);
        }
      } else {
        await fetchCacheData();
      }
    })();
  }, [url]);
  return { data };
};

export default useFetch;
