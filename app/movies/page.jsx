"use client";
import Movieitem from "@/components/Movieitem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProtectedRouter from "@/components/ProtectedRouter";
const Page = () => {
  const [movies, setMovies] = useState([]);
  const[toSearch,setTosearch]=useState([]);
  useEffect(() => {
    axios
      .get(
        "/data.json"
      )
      .then((res) => {
        setMovies(res.data.results)
        setTosearch(res.data.results)
    });
  }, []);

  return (
    <ProtectedRouter>
    <>
    <div className="pt-16 w-full flex justify-center ">
        <input onInput={(e)=>{
            const SearchMovie=toSearch.find((m)=>{
                return m["title"].toLowerCase().split(" ").join("")==e.target.value.toLowerCase().split(" ").join("")
            })
            SearchMovie ? setMovies([SearchMovie]):setMovies(toSearch)
        }} className="rounded-4xl w-4/12 border border-amber-50 text-amber-50 p-3 " placeholder="Search" type="text" />
    </div>
      <motion.div
        className="w-full flex justify-center mt-1 "
        transition={{ duration: 0.5 }}
        initial={{ y: 2000 }}
        animate={{ y: 4 }}
      >
        <div className=" justify-center w-9/12 flex flex-wrap ">
          {movies.map((m) => {
            return (
              <Movieitem
                id={m["id"]}
                key={m["id"]}
                name={m["title"]}
                image={m["poster_path"]}
                rate={m["vote_average"]}
              ></Movieitem>
            );
          })}
        </div>
      </motion.div>
    </>
    </ProtectedRouter>
  );
};

export default Page;
