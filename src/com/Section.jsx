import { useState } from "react"
import "./Section.css"
import Loader from "./Loader"


const mysection=()=>{
    const [email,Setemail]=useState(``)
    const [password,Setpassword]=useState(``)
    const [load,Setload]=useState(false)
    
    
    const myform=()=>{
        console.log(email,password)
        if(email==="vali@gmail.com" && password==="123456")
        
        alert("success")
        
        else{
            alert("worang email && password")
        }
    }
    const mybutton=()=>{
        Setload(true)
    }
    
    
    
    return(
        <>
        {
            load? <Loader/>:
            
            <div className="main">
            <div className="form">
            <input onChange={(e)=>Setemail(e.target.value)}  placeholder="enter email" id="f1" />
            <input onChange={(p)=>Setpassword(p.target.value)} placeholder="password"  id="p1" />
            <button onClick={myform}  className="b1">Submit</button>
            <button onClick={mybutton}>loadding....</button>
            </div>
            
            </div>
        }
        </>
        
        )
        
    }
    export default mysection