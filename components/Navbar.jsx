"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styling from "../components/Navbar.module.css"
import Image from 'next/image';
const Navbar = () => {
    const[navColor,setNavcolor]=useState("bg-transparent")
    const[isActive,setIsactive]=useState(null)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
                setNavcolor("bg-black")
            }
            else{
                setNavcolor(navColor)
            }
        })
    },[])
    return (
        <div className={` w-full flex justify-between fixed z-50  bg-gradient-to-t from-transparent to-black  h-15 ${navColor} ${styling.mainNav}`} >
            <div className='w-2/12 flex justify-center  ml-4'>
                <Image onClick={()=>{
                    location.assign('/')
                }} className=' cursor-pointer w-[60%] h-16'  src={"/logo.png"} width={100} height={10} ></Image>
            </div>
     
            <ul className='flex w-6/12 justify-between pt-4 text-amber-50'>
                <li><Link onClick={()=>{
                    setIsactive("Home")
                }}  className={`archivo-black-regular  text-2xl transition-all duration-300 ease-in hover:underline  ${isActive=="Home"? " underline text-red-500": "text-amber-50"}`} href={"/"}>Home</Link></li>
                <li><Link  onClick={()=>{
                    setIsactive("Movies")
                }}  className={`archivo-black-regular text-2xl transition-all duration-300 ease-in hover:underline ${isActive=="Movies"? " underline text-red-500": "text-amber-50"}`} href={"/movies"}>Movies</Link></li>
                <li><Link  onClick={()=>{
                    setIsactive("Favouriets")
                }} className={`archivo-black-regular text-2xl transition-all duration-300 ease-in hover:underline ${isActive=="Favouriets"? " underline text-red-500": "text-amber-50"}`} href={"/favourites"}>Favourites</Link></li>
                <li><Link  onClick={()=>{
                    setIsactive("About")
                }}  className={`archivo-black-regular text-2xl transition-all duration-300 ease-in hover:underline ${isActive=="About"? " underline text-red-500": "text-amber-50"}`} href={"/about"}>About</Link></li>
                <li><Link  onClick={()=>{
                    setIsactive("Contact")
                }}  className={`archivo-black-regular text-2xl transition-all duration-300 ease-in hover:underline ${isActive=="Contact"? " underline text-red-500": "text-amber-50"}`} href={"/contactUs"}>Contact us</Link></li>
            </ul>
            <div className='w-2/12'>
                <div className='w-full pt-4 '>
                    <Link onClick={()=>{
                    setIsactive("signin")
                }}  className={`archivo-black-regular  text-2xl transition-all duration-300 ease-in hover:underline  ${isActive=="signin"? " underline text-red-500": "text-amber-50"}`} href='/signup'>Sign up</Link>
                    <span className='text-amber-50'> | </span>
                    <Link  onClick={()=>{
                    setIsactive("signup")
                }} className={`archivo-black-regular  text-2xl transition-all duration-300 ease-in hover:underline  ${isActive=="signup"? " underline text-red-500": "text-amber-50"}`} href={'/signin'}>Sign in</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
