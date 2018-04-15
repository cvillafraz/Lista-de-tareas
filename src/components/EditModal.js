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
                <DialogTitle id="form-dialog-title">Edit recipe</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="title"
                        label="Recipe title"
                        type="text"
                        fullWidth
                        value={props.srecipe.title}
                        onChange={props.editRecipe}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        name="ingredients"
                        label="Ingredients (separated by commas)"
                        type="text"
                        fullWidth
                        value={props.srecipe.ingredients}
                        onChange={props.editRecipe}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.submit} color="primary">
                        Edit
            </Button>
                    <Button onClick={props.close} color="secondary">
                        Cancel
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
