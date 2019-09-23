import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarContent from "./appbar";
import Routing from "./routing";
import Page3 from "./page3";

const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth
    },

    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

export default function Main(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBarContent />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routing />
        <Page3 />
      </main>
    </div>
  );
}
