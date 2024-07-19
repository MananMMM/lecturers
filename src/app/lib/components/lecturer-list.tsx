import { ILecturer } from "../api";
import Link from "next/link";
interface IProps {
  lecturers: ILecturer[];
}

export const LecturerList = ({ lecturers }: IProps) => {
  return (
    <>
      <div className="rows has-background-link-light">
        {lecturers.map((lecturer) => {
          return (
            <div key={lecturer.id} className="row">
              <strong>Name: {lecturer.name}</strong>
              <br></br>
              <strong>Surname: {lecturer.surname}</strong>
              <br></br>
              <strong>Skill: {lecturer.skills}</strong>
              <br></br>
              <Link href={"/lecturers/edit/" + lecturer.id}>Edit</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
