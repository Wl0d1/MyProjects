import React, { useState } from 'react';

const useStateCounter = () => {
    
    const [value, setValue] = useState(0);

    const reset = () => {
        setValue(0)
    }

    const complexIncreases = () => {
        setTimeout(() => {
            // setValue(value + 1)
            setValue ((prevState) => {
                return prevState + 1;
            })
        }, 2000)
    }

    return (
    <>
        <section style={{margin: '4rem 0'}}>
            <h2> more complex counter</h2>
            <h1>{value}</h1>
            <button className='btn' onClick = {complexIncreases}>
            increase later
            </button>
        </section>
        
        </>
        ); 
    };
    
    export default useStateCounter;


    // <button className='btn' onClick={() => setValue (value - 1)}>decrease</button>
    // <button className='btn' onClick={reset}>reset</button>    -- powoduje wywolanie funkcji i odejmowanie / dodawanie itp
    // <button className='btn' onClick={() => setValue (value + 1)}>increase</button>