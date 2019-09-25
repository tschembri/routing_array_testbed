import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarContent from "./appbar";
import Page2 from "./page2";
import Page1 from "./page1";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

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

const routes = [
  {
    path: "/page1",
    exact: true,
    main: () => <Page1 />
  },
  {
    path: "/page2",
    exact: true,
    main: () => <Page2 />
  },
  {
    path: "/",
    exact: true,
    main: () => <Page1 />
  }
];

function Main(props) {
  const classes = useStyles();
  let haha = "x";

  if (typeof props.location.state === "undefined") {
    haha = "no props";
  } else {
    haha = null;
    var { haha1 } = props.location.state;
  }
  console.log("main", props);
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBarContent />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
        <p>{haha1}fdfd</p>
      </main>
    </div>
  );
}

export default withRouter(Main);
