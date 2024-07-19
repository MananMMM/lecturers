"use server"

import { InputLecturer,addLecturer, updateLecturerById } from "../api"
import { redirect } from "next/navigation"

export const handleAdd= async (data:FormData)=>{

 let lecturer:InputLecturer={

    name:data.get("name") as string,
    surname:data.get("surname") as string,
    skills:data.get("skills") as string

}

addLecturer(lecturer)
redirect("/lecturers")

}

export const handleUpdate=async(id:number,data:FormData)=>{

  const lecturer:Partial<InputLecturer>={
      name:data.get("name") as string,
      surname:data.get("surname") as string,
      skills:data.get("skills") as string
  }

updateLecturerById(id,lecturer)
redirect("/")

}
