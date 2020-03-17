import React, { useState, useEffect } from "react";

import ListCuorses from "./ListCuorses";

export default function Courses(props) {
  const [courses, setcourses] = useState({});

  useEffect(() => {
    const fetchData = () =>
      fetch(
        "http://private-2a49c-tomax.apiary-mock.com/GetCourses/" +
          props.token +
          "/" +
          props.userid
      )
        .then(res => res.json())
        .then(data => {
          setcourses(data);
        })
        .catch(error => {
          alert(error);
        });
    fetchData();
  }, []);

  return (
    <div>
      <ListCuorses
        token={props.token}
        userid={props.userid}
        list={courses.Exams}
      />
    </div>
  );
}
