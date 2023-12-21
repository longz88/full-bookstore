import BannerCard from '../home/BannerCard';

const Banner = () => {
   return (
      <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
         <div className="w-full flex flex-col md:flex-row justify-between items-center py-40 gap-12">
            {/* left side */}
            <div className="md:w-1/2 space-y-8 h-full">
               <h2 className=" text-5xl font-bold leading-snug text-black">
                  Buy and Sell Your Books{' '}
                  <span className=" text-blue-700">For the Best Prices</span>
               </h2>
               <p className="md:w-4/5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur omnis laborum tempora. Aut consectetur sapiente
                  omnis, dolore repellendus quasi soluta!
               </p>
               <div>
                  <input
                     type="search"
                     name="search"
                     id="search"
                     placeholder="Search a book"
                     className="py-2 px-2 rounded-l outline-none"
                  />
                  <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-lg">
                     Search
                  </button>
               </div>
            </div>

            {/* right side */}
            <div>
               <BannerCard />
            </div>
         </div>
      </div>
   );
};

export default Banner;
