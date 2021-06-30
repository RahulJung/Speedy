import React, { useState } from "react";
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
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    company: "",
    webURL: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlefullNameInputChange = (event) => {
    setValues({ ...values, fullName: event.target.value });
  };

  const handlephoneInputChange = (event) => {
    setValues({ ...values, phone: event.target.value });
  };

  const handlecompanyInputChange = (event) => {
    setValues({ ...values, company: event.target.value });
  };

  const handlewebURLInputChange = (event) => {
    setValues({ ...values, webURL: event.target.value });
  };

  const handleemailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form">
      <div className="head">
        <h3>Request Your FREE Website Speed Grade</h3>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={handlefullNameInputChange}
          value={values.fullName}
          required
          id="standard-required"
          label="Full Name"
        />
        <TextField
          onChange={handlephoneInputChange}
          value={values.phone}
          required
          id="standard-required"
          label="Phone"
        />
        <TextField
          onChange={handlecompanyInputChange}
          value={values.company}
          id="standard-search"
          label="Company Name"
          type="search"
        />
        <TextField
          onChange={handlewebURLInputChange}
          value={values.webURL}
          required
          id="standard-required"
          label="Website URL"
        />
        <TextField
          onChange={handleemailInputChange}
          value={values.email}
          required
          id="standard-required"
          label="Email"
        />
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Get My Report
        </Button>
        {submitted ? (
          <div className="success-message">
            Thank you for submitting the form
          </div>
        ) : null}
      </form>
    </div>
  );
}
