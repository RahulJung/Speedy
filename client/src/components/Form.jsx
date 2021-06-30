import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <div className="form">
      <div className="head">
        <h3>Request Your FREE Website Speed Grade</h3>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="standard-required" label="Full Name" />
        <TextField required id="standard-required" label="Phone" />
        <TextField id="standard-search" label="Company Name" type="search" />
        <TextField required id="standard-required" label="Website URL" />
        <TextField required id="standard-required" label="Email" />
        <Button variant="contained" color="secondary">
          Get My Report
        </Button>
      </form>
    </div>
  );
}
