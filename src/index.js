// this is the root file
import{createRoot} from "react-dom/client"

import {Letters} from "./Header"

const Data =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","x","Y","Z"];

createRoot (document.getElementById("root")).render(

    <>
    {Data.map((ele)=>{
        return <Letters name ={ele} key={ele}/>
    })}
    </>
);