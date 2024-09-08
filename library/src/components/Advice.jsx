import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { FaCheckCircle } from "react-icons/fa";

function Advice({message}) {
  return (
    <Card className="mt-72 mb-60 w-96 h-auto flex flex-col justify-center items-center fixed py-5 z-30">
    <CardContent className = "flex gap-5 items-center pt-2">
      <FaCheckCircle className='text-green-300 text-6xl'/>
      <h2 className='text-xl text-green-300'>{message}</h2>
    </CardContent>
  </Card>
  )
}

export default Advice
