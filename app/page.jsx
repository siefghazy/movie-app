"use client";
import { CarouselPlugin } from '@/components/CauorsolPlugin';
import CauorsolReact from '@/components/CauorsolReact';
import Movieitem from '@/components/Movieitem';
import Trending from '@/components/Trending';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Page = () => {
    const[trendingMovies,setTrendingMovies]=useState([
        {
            id:541671,
            poster_path:"/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg"
        },
        {
            id:1426776,
            poster_path:"/t3cmnXYtxJb9vVL1ThvT2CWSe1n.jpg"
        },
        {
            id:1233413,
            poster_path:"/jYfMTSiFFK7ffbY2lay4zyvTkEk.jpg"
        }
    ])
    return (
        <>
        <div className='w-full  shadow-lg shadow-black-1000' >
           <CauorsolReact></CauorsolReact>
        </div>
        <div className='mt-5 justify-center flex flex-col items-center '>
            <p className='text-white text-4xl font-bold p-10'>Trending Now</p>
            <div className='w-9/12 mt-5 flex justify-between'>
                {
                    trendingMovies.map((m,index)=>{
                       return <Trending  id={m["id"]} key={index} imageUrl={m["poster_path"]} rate={index+1}></Trending>
                    })
                }

            </div>


        </div>
        </>
 
    );
}

export default Page;
