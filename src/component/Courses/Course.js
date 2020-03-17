import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DenseTable from "./DenseTable";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px",
    backgroundColor: "#52809e",
    fontWeight: "bold"
  },
  media: {
    height: 140
  }
});

export default function Course(props) {
  const classes = useStyles();
  const [data, setdata] = useState({});
  const [color, setcolor] = useState();

  const getStudentsInCourseExam = () => {
    fetch(
      "http://private-2a49c-tomax.apiary-mock.com/GetStudentsInCourseExam/" +
        props.token +
        "/" +
        props.userid +
        "/" +
        props.item.ExamID
    )
      .then(res => res.json())
      .then(data => {
        setdata(data);
      })
      .catch(error => {
        alert(error);
      });
  };
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        borderColor: "red",
        padding: "10px"
      }}
    >
      <Card
        className={classes.root}
        style={{ color }}
        onClick={() => getStudentsInCourseExam}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.ExamName}
            </Typography>
            <Typography variant="body2" style={{ fontWeight: "bold" }}>
              {props.item.Year} | {props.item.Simester} | {props.item.Moed} |{" "}
              {props.item.CourseID}
              <br />
              Teacher: {props.item.ExamTeacher}
              <br />
              ExamAvarage :{props.item.ExamAvarage}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <DenseTable data={data} style={{ float: "left" }} />
    </div>
  );
}
