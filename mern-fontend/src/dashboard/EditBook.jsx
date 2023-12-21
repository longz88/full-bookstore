import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Label, TextInput, Select, Textarea, Button } from 'flowbite-react';
import { redirect } from 'react-router-dom';

const EditBook = () => {
   const { id } = useParams();
   const { bookTitle, authorName, imageURL, bookDescription, bookPDFURL } =
      useLoaderData();

   const bookCategories = [
      'Select category',
      'Textbook',
      'Novel',
      'Picture book',
      'Reference book',
      'Comic',
      'Poem',
      'Hardcover',
      'Paperback',
      'Autobiography',
      'Encyclopedia',
      'Thriller book',
      'Dictionary',
      'Short story',
      'Cookery book',
      'Non-fiction',
      'Myth',
      'Fairy Tale',
      'Romance',
      'Drama',
      'History',
      'Science fiction',
   ];

   const [selectedBookCategory, setSelectedBookCategory] = useState('');

   const handleBookUpdate = (e) => {
      e.preventDefault();

      const bookTitle = e.target.bookTitle.value;
      const authorName = e.target.authorName.value;
      const imageURL = e.target.imageURL.value;
      const category = e.target.category.value;
      const bookDescription = e.target.bookDescription.value;
      const bookPDFURL = e.target.bookPDFURL.value;

      const updateBookObj = {
         bookTitle,
         authorName,
         imageURL,
         category,
         bookDescription,
         bookPDFURL,
      };

      fetch(`http://localhost:8080/api/book/${id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(updateBookObj),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);

            window.location.href = '/admin/dashboard/manage';
         });
   };

   return (
      <div className="px-4 my-12">
         <h2 className="mb-8 text-3xl font-bold">Edit Book</h2>

         <form
            onSubmit={handleBookUpdate}
            className=" lg:w-[1180px] grid grid-cols-2 gap-8"
         >
            <div className="">
               <div className="mb-2 block">
                  <Label htmlFor="bookTitle" value="Book Title:" />
               </div>
               <TextInput
                  id="bookTitle"
                  name="bookTitle"
                  type="text"
                  placeholder="Book name"
                  required
                  defaultValue={bookTitle}
               />
            </div>

            <div className="">
               <div className="mb-2 block">
                  <Label htmlFor="authorName" value="Author Name:" />
               </div>
               <TextInput
                  id="authorName"
                  name="authorName"
                  type="text"
                  placeholder="Author name"
                  required
                  defaultValue={authorName}
               />
            </div>

            <div className="">
               <div className="mb-2 block">
                  <Label htmlFor="imageURL" value="Book Image URL:" />
               </div>
               <TextInput
                  id="imageURL"
                  name="imageURL"
                  type="text"
                  placeholder="Book image URL"
                  required
                  defaultValue={imageURL}
               />
            </div>

            <div className="">
               <div className="mb-2 block">
                  <Label htmlFor="category" value="Select Category:" />
               </div>
               <Select
                  id="category"
                  name="category"
                  value={selectedBookCategory}
                  onChange={(e) => setSelectedBookCategory(e.target.value)}
               >
                  {bookCategories.map((option) => (
                     <option key={option} value={option}>
                        {option}
                     </option>
                  ))}
               </Select>
            </div>

            <div className="col-start-1  col-end-3">
               <div className="mb-2 block">
                  <Label htmlFor="bookDescription" value="Book Description:" />
               </div>
               <Textarea
                  id="bookDescription"
                  placeholder="Write description ..."
                  required
                  rows={4}
                  defaultValue={bookDescription}
               />
            </div>

            <div className="col-start-1  col-end-3">
               <div className="mb-2 block">
                  <Label htmlFor="bookPDFURL" value="Book PDF URL:" />
               </div>
               <TextInput
                  id="bookPDFURL"
                  name="bookPDFURL"
                  type="text"
                  placeholder="Book PDF URL"
                  defaultValue={bookPDFURL}
               />
            </div>

            <Button type="submit">Save</Button>
         </form>
      </div>
   );
};

export default EditBook;
