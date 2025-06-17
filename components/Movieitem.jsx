import Image from 'next/image';
import React from 'react';

const Movieitem = ({id, name,rate,image}) => {
    return (
        <div className={` m-1 shadow-black w-3/12 rounded overflow-hidden shadow-lg 
        max-h-96  hover:max-h-[1000px] transition-all duration-300 ease-linear `}>
        <Image src={`https://image.tmdb.org/t/p/w500${image}`} width={500} height={40} alt='aloo'></Image>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-amber-50">{name}</div>
       
        </div>
        <div className="px-6 pt-4 pb-2 w-full flex justify-between">
    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{rate}</span>
    <button onClick={()=>{
      location.assign(`/movies/${id}`)
    }} className='text-white mb-0.5 underline cursor-pointer'>Click for details </button>
  </div>
      </div>
    );
}

export default Movieitem;