'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Image from "next/image";
import Dialog from "./dialog";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Home() {
  const [open,setOpen] = React.useState(false);
  
  const handleOpen = (status) => {
  	setOpen(status);
  }
  const handleClose = (status) =>{
  	setOpen(status);
  }
  return (
    <>
    <Dialog isOpen={open} onClose={handleClose}/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        hello word!
        <Button color={open?'error':'success'} 
        startIcon={open?<HighlightOffIcon />:<OpenInNewIcon/>}
        variant="outlined" onClick={()=>handleOpen(!open)}>
        {open ? "close" : "open"} dialog
       </Button>
      </div>
    </main>
    </>
  );
}
