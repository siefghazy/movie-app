"use client"
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const CauorsolReact = () => {
  const[data,setData]=useState([
    {
      name:"The Joker",
      path:"/joker.jpg"
    },
    {
      name:"John Wick",
      path:"/johnwick.jpg"
    },
    {
      name:"Blad Runner 2049",
      path:"/you look lonely.jpg"
    }
  ])
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplayspeed:5
      };
      return (
        <div className=' w-full h-96 shadow-2xl shadow-black  '> <Slider {...settings}>
          { data.map((m)=>(
            <div className=' relative w-full h-96'>
            <p className="absolute text-amber-50 z-30 top-30 left-20 text-5xl font-bold"> {m["name"]}</p>
            <div className='absolute h-96  opacity-75 bg-black w-full '>s</div>
            <div className='absolute top-60 left-20 flex w-3/12 justify-between '>
            <button className=' text-white  cursor-pointer h-7 w-42 flex justify-evenly rounded-3xl items-center-safe bg-blue-950 '><FontAwesomeIcon icon={faStar} style={{color: "#ffffff"}} />  Add to favourites </button>
            <button className='text-white  cursor-pointer h-7 w-30 flex justify-evenly  rounded-3xl items-center-safe bg-blue-950'><FontAwesomeIcon icon={faShare}></FontAwesomeIcon> Share</button>
            </div>
              <Image className=' w-full h-96  ' src={m["path"]} width={400} height={900}></Image>
          </div>
       ) )}
      </Slider></div>
      );
}

export default CauorsolReact;
