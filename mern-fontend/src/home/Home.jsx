import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import FavoriteBook from './FavoriteBook';
import OtherBook from './OtherBook';
import PromoBanner from './PromoBanner';
import Review from './Review';

const Home = () => {
   return (
      <div className="">
         <Banner />
         <BestSellerBooks />
         <FavoriteBook />
         <PromoBanner />
         <OtherBook />
         <Review />
      </div>
   );
};

export default Home;
