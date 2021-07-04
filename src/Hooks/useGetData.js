import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { InputLoaderContext } from '../context/InputloaderContext';

const useGetData = (baseURl, endpoint) => {
  const [response, setResponse] = useState({});
  const { setInputLoader } = useContext(InputLoaderContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURl}/${endpoint}`);

        setResponse(res);
        setInputLoader(false);
      } catch (error) {
        console.log(error);
      }
    };

    const delayTimer = setTimeout(() => {
      endpoint && fetchData();
    }, 500);

    return () => {
      clearTimeout(delayTimer);
      setResponse({});
    };
  }, [endpoint, baseURl, setInputLoader]);

  return response;
};

export default useGetData;
