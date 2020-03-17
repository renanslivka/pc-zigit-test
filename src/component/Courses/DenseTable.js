import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./DenseTable.css";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function DenseTable(props) {
  const classes = useStyles();
  const rows = props.data.CourseParticipant;
  const [count, setCount] = useState();

  return (
    <TableContainer
      component={Paper}
      style={{ tableLayout: "fixed", width: "60%", margin: "0.5%" }}
    >
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead color="white">
          <TableRow>
            <TableCell>ParId</TableCell>
            <TableCell align="center">Checker Assitant </TableCell>
            <TableCell align="center">Grade</TableCell>
            <TableCell align="center">Exam Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map(row => (
              <TableRow
                id="row"
                onClick={() => {
                  row.ParExamStatus < 2
                    ? setCount(row.ParExamStatus++)
                    : setCount(row.ParExamStatus);
                  console.log(count);
                }}
                key={row.ParId}
              >
                <TableCell component="th" scope="row">
                  {row.ParId}
                </TableCell>
                <TableCell align="center">{row.CheckerAssitantArray}</TableCell>
                <TableCell align="center">{row.ParGrade}</TableCell>
                <TableCell align="center">{row.ParExamStatus}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
