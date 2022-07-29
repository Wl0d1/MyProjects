import React from 'react'

const data = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jerry'},
    {id: 3, name: 'George'},
    {id: 4, name: 'Anna'},
];

const useStateArray = () => {
    const [people, setPeople] = React.useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person)=> person.id !== id)
        setPeople(newPeople)
    }

    return ( 
        <>
        {people.map((person) => {
                const {id, name} = person;
                return (
                    <div
                    key={id} className='item'>
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)}>removeItem</button>
                    </div>
                );
            })}
            <button className='btn' onClick={() => setPeople([])}>
            clear items</button>
        </>
    );
}

export default useStateArray;