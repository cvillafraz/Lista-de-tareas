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
import List, { ListItem, ListItemText, ListItemSecondaryAction } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
const id = require("short-id");
//define styles for the todos
const styles = theme => ({
  grey: {
    background: grey[800]
  },
  indigo: {
    background: grey[100]
  },
  expansion: {
    margin: "2rem auto",
    boxShadow: `6px 6px 10px ${grey[800]}`,
    padding:0
  },
  panel: {
    fontSize: "1rem",
    color: grey[800],
    width: "100%",
  }
});
const Todos = props => {
  const { classes } = props;
  return (
    <List className={classes.expansion}>
      {props.statex.length>=1?props.statex.map((todo, i, arr) => (
        <ListItem key={id.generate()} className={classes.indigo}>
            <Grid container justify="space-between" alignItems="center">
            <div style={{display:"flex",alignItems:"center"}}><Checkbox
              tabIndex={-1}
              disableRipple
              onClick={(e)=>props.select(todo,e)} 
            />
              <Typography variant="title">{todo.title}</Typography>
            </div>
              <div>
                <Button
                  variant="fab"
                  color="default"
                  aria-label="edit"
                  onClick={() => props.showevt(todo, i, arr)}
                >
                  <Icon>edit_icon</Icon>
                </Button>
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="delete"
                  onClick={() => props.delete(todo)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </Grid>
        </ListItem>
      )):<React.Fragment />}
    </List>
  );
};
export default withStyles(styles)(Todos);
