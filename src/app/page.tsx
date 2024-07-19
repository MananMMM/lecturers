import Image from "next/image";
import styles from "./page.module.css";
import { getAllLecturers } from "./lib/api";
import { LecturerList } from "./lib/components/lecturer-list";

export default function Home() {
  const items=getAllLecturers()
  console.log(items)
  return (
    <main className={styles.main}>
      <LecturerList 
      lecturers={items}/>
      </main>
  );
}
