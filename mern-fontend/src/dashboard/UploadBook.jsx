import React, { useState } from 'react';
import { Label, TextInput, Select, Textarea, Button } from 'flowbite-react';
import { toast } from 'react-toastify';

const UploadBook = () => {
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

   const handleBookSubmit = (e) => {
      e.preventDefault();

      const bookTitle = e.target.bookTitle.value;
      const authorName = e.target.authorName.value;
      const imageURL = e.target.imageURL.value;
      const category = e.target.category.value;
      const bookDescription = e.target.bookDescription.value;
      const bookPDFURL = e.target.bookPDFURL.value;

      const bookObj = {
         bookTitle,
         authorName,
         imageURL,
         category,
         bookDescription,
         bookPDFURL,
      };

      fetch('http://localhost:8080/api/book', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(bookObj),
      })
         .then((res) => res.json())
         .then(() => {
            toast.success('Book created successfully');
            e.target.reset();
         });
   };

   return (
      <div className="px-4 my-12">
         <h2 className="mb-8 text-3xl font-bold">Upload Book</h2>

         <form
            onSubmit={handleBookSubmit}
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
               />
            </div>

            <Button type="submit">Upload</Button>
         </form>
      </div>
   );
};

export default UploadBook;
