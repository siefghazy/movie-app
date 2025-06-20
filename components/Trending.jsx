import React from "react";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
import{faCrown}from"@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Trending = ({ imageUrl, rate , id }) => {
  return (
    <div className="relative">
      <div className="absolute left-2.5">
        {rate == 1 ? (
            <div className="w-8">
   
            <FontAwesomeIcon
            style={{ color: "white", fontSize: "50px",opacity:"0.7" }}
            icon={fa1}
          ></FontAwesomeIcon>
                   <FontAwesomeIcon icon={faCrown} style={{color: "#FFD43B",}} />
          </div>

 
        ) : rate == 2 ? (
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "50px",opacity:"0.7" }}
            icon={fa2}
          ></FontAwesomeIcon>
        ) : rate == 3 ? (
          <FontAwesomeIcon
            style={{ color: "white ", fontSize: "50px",opacity:"0.7" }}
            icon={fa3}
          ></FontAwesomeIcon>
        ) : (
          ""
        )}
      </div>
        <Image 
        onClick={()=>{
          location.assign(`/movies/${id}`)
        }}
          className="rounded-2xl hover:w-65 transition-all duration-300 ease-in cursor-pointer hover:shadow-2xl hover:shadow-orange-900"
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          width={250}
          height={125}
        />
    </div>
  );
};

export default Trending;
