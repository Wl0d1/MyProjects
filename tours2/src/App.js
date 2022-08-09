import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './Loading.js';
import Tours from './Tours.js'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState ([]) // dane ktore pobieramy sa w tablicy

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }
 

  const fetchTours = async () => {
    setLoading(true)

    try {
    const response = await fetch (url); // async makes a function return a promise a await makes function wait for a promise
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    } catch (error) {    
    setLoading (false);
    console.log(error);
    }
    //funkcja await wstrzymuje wywolanei funkcji asynchronicznej i czeka na przekazanie deklaracji promise ?. Nastepnie wznawia wywolanie funkcji async oraz interpretuje jako wartosc rozwiazana. AWAIT - dziala wylacznie wewnatrz funkcji async. poza cialem funkcji async otrzymamy syntax error. Celem funkcji async oraz await jest uproszczenie dzialania uzywajac obietnic (promises) Promises sa podobne do strukturalnych callbackow tak async/await jest podobne do kombinacje generatorow i obietnic 

    
    // console.log(tours)
  };

    useEffect(() => {
      fetchTours();         //Wywoluje funkcje hookiem efektem ubocznym
    }, []);

  if (loading === true) {
    return (
      <main>
      <Loading />
      </main>
    )
     /* <Loading /> komponent zagniezdzony */
  } 

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
        <h2> no tours left</h2>
        <button onClick = {fetchTours}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour = {removeTour}/>
    </main>
  )
      };



export default App;
