import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  })
);

function Content() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    iterations: "100"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          id="filled-helperText"
          label="Iterations"
          defaultValue="100"
          className={classes.textField}
          margin="normal"
          value={values.iterations}
          onChange={handleChange("iterations")}
        />
      </form>
    </>
  );
}

export default Content;
