import React from 'react'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import AddIcon from '@material-ui/icons/Add';

export default (props) => {

  return (
    <div>
      <Button variant="raised" color="primary" style={{marginLeft:'24px'}} onClick={()=>props.showevt(props)}>Add recipe<AddIcon/></Button>
      <Dialog
        open={props.show}
        onClose={() => props.showevt}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add recipe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Recipe title"
            type="text"
            fullWidth
            name="title"
            onChange={props.createRecipe}
          />
          <TextField
            margin="dense"
            id="ingredients"
            label="Ingredients (separated by commas)"
            type="text"
            name="ingredients"
            fullWidth
            onChange={props.createRecipe}
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={props.submit} color="primary" variant="raised">
            Submit
            </Button>
          <Button onClick={props.close} color="secondary" variant="raised">
            Cancel
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
