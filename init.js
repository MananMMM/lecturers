const DataBase=require("better-sqlite3")
const db=new DataBase("lecturers.db")


db.exec(`
    CREATE TABLE IF NOT EXISTS lecturers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    surname TEXT,
    skills TEXT
    )
    `)