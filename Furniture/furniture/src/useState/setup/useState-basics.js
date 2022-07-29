import React, {useState} from 'react';
// useState - funkcja ktora kontroluje value

const useStateBasics = () => {
    // console.log(useState('hello world'));
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value, handler)

    const [text, setText] = useState('1099')

    const handleClick = () => { 
        if (text === 'random title'){
        setText('hello world')
     } else {
        setText('random title')
     } 
};

    return (
    <React.Fragment>
        <h1>{text}</h1>
        <button className='btn' onClick={handleClick}>
        change title\</button>
    </React.Fragment>
    )
};

export default useStateBasics;