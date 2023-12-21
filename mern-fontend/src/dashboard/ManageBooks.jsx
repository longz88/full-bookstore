import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageBooks = () => {
   const [allBooks, setAllBooks] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/api/book')
         .then((res) => res.json())
         .then((data) => setAllBooks(data));
   }, []);

   const handleDelete = (id) => {
      fetch(`http://localhost:8080/api/book/${id}`, {
         method: 'DELETE',
      })
         .then((res) => res.json())
         .then(() => {
            toast.success('Deleted book');
            // setAllBooks(data);
         });
   };

   return (
      <div className="px-4 my-12">
         <h2 className="mb-8 text-3xl font-bold">Manage All Book</h2>

         <Table className="lg:w-[1180px]">
            <Table.Head>
               <Table.HeadCell>No.</Table.HeadCell>
               <Table.HeadCell>BOOK NAME</Table.HeadCell>
               <Table.HeadCell>AUTHOR NAME</Table.HeadCell>
               <Table.HeadCell>CATEGORY</Table.HeadCell>
               <Table.HeadCell>ACTIONS</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
               {allBooks.map((book, index) => (
                  <Table.Row
                     className="bg-white dark:border-gray-700 dark:bg-gray-800"
                     key={book._id}
                  >
                     <Table.Cell className=" whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {index + 1}
                     </Table.Cell>
                     <Table.Cell className="w-2/5">
                        <p className="truncate w-96">{book.bookTitle}</p>
                     </Table.Cell>
                     <Table.Cell className="w-1/5">
                        {book.authorName}
                     </Table.Cell>
                     <Table.Cell>{book.category}</Table.Cell>
                     <Table.Cell className="flex gap-4">
                        <Link
                           to={`/admin/dashboard/edit-book/${book._id}`}
                           className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                           Edit
                        </Link>

                        <button
                           className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                           onClick={() => handleDelete(book._id)}
                        >
                           Delete
                        </button>
                     </Table.Cell>
                  </Table.Row>
               ))}
            </Table.Body>
         </Table>
      </div>
   );
};

export default ManageBooks;
