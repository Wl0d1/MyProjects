import React, {useState} from 'react';

const useStateObject = () => {

    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message', 
    });

    // const [name, setName] = useState('peter')
    // const [age, setAge] = useState(24)
    // const [message, setMessage] = useState('random message')

    const changeMessage = () => {
        setPerson({...person, message: 'Hello world' });
        // setMessage('hello world');
    }

    return (
        <>
        <h2>{person.name}</h2>
        <h2>{person.age}</h2>
        <h2>{person.message}</h2>
        <button className="btn" onClick={changeMessage}>
        change message
        </button>
        </>
    );
}

export default useStateObject