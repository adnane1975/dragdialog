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
    <Button color={open?'error':'success'} 
        startIcon={open?<HighlightOffIcon />:<OpenInNewIcon/>}
        variant="outlined" onClick={()=>handleOpen(!open)}>
        {open ? "close" : "open"} dialog
       </Button>
       
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        The allure of the mountains is timeless and captivating, a testament to nature's grandeur and splendor. Towering peaks crowned with snow, piercing the cerulean skies, evoke a profound sense of awe and wonder. Each mountain range tells a unique story, carved by the hands of time, wind, and water, shaping landscapes of breathtaking beauty and diversity. The majestic mountains stand as silent sentinels, their rugged profiles standing firm against the horizon. Their peaks often hidden in misty veils or illuminated by the golden hues of dawn and dusk, they inspire poets, artists, and adventurers alike. The ever-changing play of light and shadow across their surfaces creates a mesmerizing spectacle, painting a picture of ethereal beauty that words often fail to capture. Beyond their visual splendor, mountains harbor a rich tapestry of life. From the hardy alpine flora that clings tenaciously to their slopes to the elusive wildlife that calls these heights home, the mountains are teeming with biodiversity. The tranquil lakes nestled in their valleys, fed by crystal-clear streams cascading down from the heights, are oases of serenity and natural beauty. But it is not just their physical attributes that make mountains so enchanting. They have a profound spiritual significance for many cultures, symbolizing strength, endurance, and the timeless cycle of life and renewal. For those who venture to their summits, the mountains offer not only a physical challenge but also a journey of self-discovery and introspection, as one connects with nature in its most primal form. In a world that often moves at a relentless pace, the mountains stand as a reminder of the enduring beauty and resilience of the natural world. They invite us to pause, to breathe in the crisp mountain air, and to marvel at the wonders of the earth. Whether seen from afar or experienced up close, the mountains leave an indelible impression on the soul, a testament to the enduring beauty and majesty of the natural world.
        
      </div>
    </main>
    </>
  );
}
