import { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const OtherBook = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/api/book')
         .then((res) => res.json())
         .then((data) => setBooks(data.slice(4, 10)));
   }, []);

   return (
      <div>
         <BookCards books={books} headline="Other Books" />
      </div>
   );
};

export default OtherBook;
