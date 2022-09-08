import { useState, useEffect } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false); // typ danych boolean,
  const [hasError, setHasError] = useState(false); // czy jest jakis bład, typ danych boolean
  const [data, setData] = useState(null);
  
  
  //   const API_KEY = '?fbclid=IwAR1AKp2dby7TrpMeXcoY0fk3xGzjqDvgqbZ7beZqxi9H0NB_rpV7o4RoqW0'
  const API_URL = `https://630cd95653a833c53436c26c.mockapi.io/users/`;
  
  
  useEffect(() => {
      let id = 5
    setIsLoading(true);
    setHasError(false);
    fetch(API_URL + id)
      .then((res) => res.json()) // zmieniam dane na jsona zeby moc pracowac w js
      .then((base) => setData(base)) // jsonowany obiekt rezultat linijki 31 -> cos czego pozadam (dane)
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    hasError,
    data,
  };
};

export default useFetch;
