import React, { useState } from "react";
import Resell from "../Olx/Resell";
import Scrap from "../Scrap/Scrap";
import { Button } from "@mui/material";

function Home(){
    const [toggle , settoggle ] = useState(false);
    return (
       <div>
        <Button onClick={()=>settoggle(!toggle)}>Click me</Button>
        <hr />
         {
            toggle ? (
                <Resell />
            ) :(
                <Scrap />
            )
        }
       </div>
    )
}

export default Home;
