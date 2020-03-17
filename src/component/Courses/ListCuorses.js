import React from "react";
import Course from "./Course";

export default function ListCuorses(props) {
  const listItems =
    props.list &&
    props.list.map(exam => {
      return (
        <div id="list">
          <Course
            token={props.token}
            userid={props.userid}
            key={exam.ExamID}
            item={exam}
          />
        </div>
      );
    });

  return <div>{listItems}</div>;
}
