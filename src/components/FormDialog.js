import  React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const[coinName,setCoinName] = React.useState("");
  const[coinValue,setCointValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(!open);
    // setValue()
    if(coinName != "" && coinValue !=0){
        {props.handleCallback([coinName,coinValue])}
        setCoinName('');
        setCointValue();
    }
    
  };


  const handleClose = () => {
    setOpen(false);
  };


  const handleNameChange = e =>{ 
    // console.log(`TypedName  => ${e.target.value}`)
    setCoinName(e.target.value);
  }
  const handleCoinValueChange = e =>{ 
    // console.log(`TypedValue => ${e.target.value}`)
    setCointValue(e.target.value);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Add Coin Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
        Enter Coin Details
          </DialogContentText>
          <TextField
            // autoFocus
            margin="dense"
            id="coinName"
            label="Coin Name"
            type="text"
            fullWidth
            variant="standard"
            value = {coinName}
            onChange={
                handleNameChange
            }
          />
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="Purchased Coin Value"
            type="number"
            fullWidth
            variant="standard"
            value = {coinValue}
            onChange={
                handleCoinValueChange
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickOpen}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}