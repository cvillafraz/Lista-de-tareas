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

  return <React.Fragment>
      <Button variant="raised" color="primary" onClick={() => props.showevt(props)}>
        Añadir tarea
        <AddIcon />
      </Button>
      <Dialog open={props.show} onClose={() => props.showevt} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir tarea</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="title" label="Título" type="text" fullWidth name="title" onChange={props.createTodo} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.submit} color="primary" variant="raised">
            Añadir
          </Button>
          <Button onClick={props.close} color="secondary" variant="raised">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>;
}
