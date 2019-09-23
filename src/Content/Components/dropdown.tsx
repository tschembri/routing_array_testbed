import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220
    },

    root: {
      display: "flex",
      flexWrap: "wrap"
    },
  })
);

function Content() {
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  const [values, setValues] = React.useState({
    must_be_same: "",
  });
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="mediaset-type">Select Mediaset Type</InputLabel>
          <Select
            value={values.must_be_same}
            onChange={handleChange}
            inputProps={{
              name: "must_be_same",
              id: "mediaset-type"
            }}
          >
            <MenuItem value={"image"}>Image</MenuItem>
            <MenuItem value={"sound"}>Sound</MenuItem>
            <MenuItem value={"text"}>Text</MenuItem>
            <MenuItem value={"survey"}>Survey Item</MenuItem>
            <MenuItem value={"video"}>Video</MenuItem>
          </Select>
        </FormControl>
      </form>
    </>
  );
}

export default Content;
