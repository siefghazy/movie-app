"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProtectedRouter = ({ children }) => {
  const router = useRouter();
  const token=localStorage.getItem("Token")
  if(!token){
    router.push("/signin")
  }
  else{
    return children
  }
};

export default ProtectedRouter;