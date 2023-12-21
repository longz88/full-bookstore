import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import {
   HiArrowSmRight,
   HiChartPie,
   HiInbox,
   HiOutlineCloudUpload,
   HiOutlineUpload,
   HiShoppingBag,
   HiTable,
   HiUser,
   HiViewBoards,
} from 'react-icons/hi';
import UserImg from '../assets/profile.jpg';

const SideBar = () => {
   return (
      <div>
         <Sidebar
            aria-label="Sidebar with content separator example"
            className="h-screen"
         >
            <Sidebar.Logo href="#" img={UserImg} imgAlt="Flowbite logo">
               Flowbite
            </Sidebar.Logo>

            <Sidebar.Items>
               <Sidebar.ItemGroup>
                  <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                     Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item
                     href="/admin/dashboard/upload"
                     icon={HiOutlineCloudUpload}
                  >
                     Upload
                  </Sidebar.Item>
                  <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                     Manage Books
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiUser}>
                     Users
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiShoppingBag}>
                     Products
                  </Sidebar.Item>
                  <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                     Login
                  </Sidebar.Item>
                  <Sidebar.Item href="/logout" icon={HiTable}>
                     Log out
                  </Sidebar.Item>
               </Sidebar.ItemGroup>
               <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie}>
                     Upgrade to Pro
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiViewBoards}>
                     Documentation
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={BiBuoy}>
                     Help
                  </Sidebar.Item>
               </Sidebar.ItemGroup>
            </Sidebar.Items>
         </Sidebar>
      </div>
   );
};

export default SideBar;
