import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

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
  window.alert("hi");
  return (
    <div>
      window.alert("hi")
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <center>Block name</center>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Options
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Content;
