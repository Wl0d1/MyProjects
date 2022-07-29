import React from 'react';
import './App.css';

const books = [ 
{
  id: 1,
  img: 'https://bigimg.taniaksiazka.pl/images/popups/180/9788380874015.jpg',
  title: "Od dobrego do wielkiego",
  author: "Jim Collins",
},
{
  id: 2,
  img: "https://th.bing.com/th/id/OIP.x5TT5MUjBowGXnGdTXmsVAHaD4?pid=ImgDet&rs=1",
  title: "Wolna głowa",
  author: "Volker Busch",
},
];

function BookList() {
  return ( 
    <section className = 'booklist'>
    {books.map((book, index) => {
      return 
        <Book key={book.id} {...book}></Book>;
    })}
    </section>
  );
};

const Book = ({img, title, author}) => {
  const clickHandler = () => {
    alert('hello world')
  }

  return (
  <article className = 'book'>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>  
    <button type='button' onClick={clickHandler}>
    reference example
    </button>
  </article>
);
};

export default BookList;