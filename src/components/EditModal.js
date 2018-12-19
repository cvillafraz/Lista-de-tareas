import React from 'react'
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
export default (props) => {
    return (
        <div>
            <Dialog
                open={props.show}
                onClose={props.close}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Editar tarea</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="title"
                        label="Recipe title"
                        type="text"
                        fullWidth
                        value={props.stodo.title}
                        onChange={props.editTodo}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.submit} color="primary">
                        Editar
            </Button>
                    <Button onClick={props.close} color="secondary">
                        Cancelar
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
