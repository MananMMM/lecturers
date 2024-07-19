import Database from 'better-sqlite3'
 

export interface ILecturer{
    id:number
    name:string
    surname:string
    skills:string
}
export type InputLecturer= Omit<ILecturer,'id'>

const db=new Database("lecturers.db")

export const addLecturer=(lecturer:InputLecturer)=>{
    db.prepare(`
        INSERT INTO lecturers(name,surname,skills)
        VALUES(@name,@surname,@skills)
        `).run(lecturer)
}


export const getAllLecturers=():ILecturer[]=>{
return db.prepare(`
    SELECT * FROM lecturers
    `).all()  as ILecturer[]

}

export const getLecturerById=(id:number):ILecturer=>{
    return db
    .prepare("SELECT * FROM lecturers WHERE id=?")
    .get(id) as ILecturer
    }

    export const updateLecturerById=(id:number,lecturer:InputLecturer)=>{
        return db.prepare("UPDATE lecturers set name=?,surname=?,skills=? WHERE id=?")
        .run(lecturer.name,lecturer.surname,lecturer.skills,id)
    
    }
    
