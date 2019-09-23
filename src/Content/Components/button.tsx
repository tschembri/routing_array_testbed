import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    }
  })
);

function Content() {
  const classes = useStyles();

  return (
    <>
      <Button variant="contained" className={classes.button}>
        Simulate
      </Button>
    </>
  );
}

export default Content;
