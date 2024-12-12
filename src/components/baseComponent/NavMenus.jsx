// import React from 'react';
// import PropTypes from 'prop-types';

import { useContext, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdRateReview, MdReviews } from "react-icons/md";
import { TiCloudStorage } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { TransferLists } from "../../Contexts/TransferLists";

const NavMenus = () => {
  // const { lightTheme,setLightTheme } = useContext(TransferLists);
  
  // const toggleDarkMode = () => {
  //   const html = document.documentElement; 

  //   if (html.classList.contains('dark')) {
  //     html.classList.remove('dark');
  //      setLightTheme(true)
  //     localStorage.setItem('theme', 'light'); 
  //   } else {
  //     html.classList.add('dark'); 
  //      setLightTheme(false)
  //     localStorage.setItem('theme', 'dark'); 
  //   }
  // };
  
  // useEffect(()=>{
  //   const theme = localStorage.getItem('theme');
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //     setLightTheme(false)
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     setLightTheme(true)
  //   }
  // },[])

  return (
    <>
      <li className="w-fit">
        <NavLink to={"/"} className="hover:bg-transparent flex items-center gap-1"><AiFillHome /> Home</NavLink>
      </li>

      <li className="w-fit">
        <NavLink to={"/games"} className="hover:bg-transparent flex items-center gap-1"><IoGameController />All Games</NavLink>
      </li>
      
      <li className="w-fit">
        <NavLink to={"/reviews"} className="hover:bg-transparent flex items-center gap-1"><MdReviews />All Reviews</NavLink>
      </li>

      <li className="w-fit">
        <NavLink to={"/addReview"} className="hover:bg-transparent flex items-center gap-1"><MdRateReview />Add Review</NavLink>
      </li>      

      <li className="w-fit">
        <NavLink to={"/myReviews"} className="hover:bg-transparent flex items-center gap-1"><TiCloudStorage className="text-[18px]" />My Reviews</NavLink>
      </li>

      <li className="w-fit">
        <NavLink to={"/wishlist"} className="hover:bg-transparent flex items-center gap-1"><FaHeart />My Wishlist</NavLink>
      </li>

      {/* <li className="w-fit " style={{border:"none"}}>
        <label className="flex themeController cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <input onClick={toggleDarkMode} checked={lightTheme} type="checkbox" className="toggle toggle-xs" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
        </label>
      </li> */}

    </>
  );
};

// NavMenus.propTypes = {

// };

export default NavMenus;
