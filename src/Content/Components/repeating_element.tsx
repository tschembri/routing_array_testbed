import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },

    card: {
      maxWidth: 315
    },
    media: {
      height: 140
    }
  })
);

function Content() {
  const classes = useStyles();

  const repeating_component = (
    <Button variant="contained" className={classes.button}>
      Simulate
    </Button>
  );
  const [component_list, setComponentList] = React.useState([
    repeating_component
  ]);

  function AddComponent() {
    var repeating_components;
    repeating_components = component_list.slice();
    repeating_components.push(repeating_component);
    setComponentList(repeating_components);
  }

  return (
    <>
      {component_list}

      <>
        <IconButton aria-label="Add Block" onClick={AddComponent}>
          <AddIcon />
        </IconButton>
      </>
    </>
  );
}

export default Content;
