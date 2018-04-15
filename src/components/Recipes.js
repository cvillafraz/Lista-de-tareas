import Grid from "material-ui/Grid";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Button from "material-ui/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Icon from "material-ui/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "material-ui/Typography";
import React from "react";
import Card, { CardActions, CardContent } from "material-ui/Card";
import { withStyles } from "material-ui/styles";
import { grey, lightBlue } from "material-ui/colors/";
import List, { ListItem, ListItemText } from "material-ui/List";
const id = require("short-id");
//define styles for the recipes
const styles = theme => ({
  grey: {
    background: grey[800]
  },
  indigo: {
    background: grey[100]
  },
  expansion: {
    margin: "2rem auto"
  },
  panel: {
    fontSize: "1rem",
    color: grey[800],
    width: "100%"
  }
});
const Recipes = props => {
  const { classes } = props;
  return (
    <CardContent className={classes.expansion}>
      {props.statex.map((recipe, i, arr) => (
        <ExpansionPanel key={id.generate()} className={classes.indigo}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Grid container justify="space-between">
              <Typography variant="title">{recipe.title}</Typography>
              <div>
                <Button
                  variant="fab"
                  color="default"
                  aria-label="edit"
                  onClick={() => props.showevt(recipe, i, arr)}
                >
                  <Icon>edit_icon</Icon>
                </Button>
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="delete"
                  onClick={() => props.delete(recipe)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.panel}>
              <strong>Ingredients: </strong>
              <List>
                {recipe.ingredients.split(",").map((ingredient, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={ingredient} />
                  </ListItem>
                ))}
              </List>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </CardContent>
  );
};
export default withStyles(styles)(Recipes);
