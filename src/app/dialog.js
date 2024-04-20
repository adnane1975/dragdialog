'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },

  pointerEvents:'none'
}));

function PaperComponent(props) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper ref={nodeRef} {...props} />
    </Draggable>
  );
}

export default function CustomizedDialogs(props) {
  const {isOpen,onClose} = props;
  const [open, setOpen] = React.useState(isOpen);
	

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = (event,reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      onClose(false);
    }
    return
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperComponent={PaperComponent}
        hideBackdrop={true}
        PaperProps={{ style: { pointerEvents: 'auto' } }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Draggable / Non Modal & more
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

