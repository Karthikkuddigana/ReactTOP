import { useState } from "react";
import "./GeneralInfo.css"; 
function GeneralInfo(){
    const [dispState,myDispState]=useState(true); 
    const [nameState,setName]=useState(""); 
    const [ageState, setAge]=useState(""); 
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleChangeAge=(e)=>{
        // e.preventDefault(); 
        setAge(e.target.value); 
    }
    const handleClick=()=>{
        myDispState(false); 
    }
    const editHandler=()=>{
        myDispState(true); 

    }
    return (
        <>  
            {dispState && <div id="ContentGeneralInfo">
                <form>
                    <div className="formElements">
                        <label htmlFor="Name">Name:</label>
                        <input type="text" id="Name" onChange={handleChangeName} value={nameState}required/>
                    </div>
                    <div className="formElements">
                        <label htmlFor="Age">Age:</label>
                        <input type="text" id="Age" onChange={handleChangeAge} value={ageState}required/>
                    </div>
                    <div className="formElements">
                        <button onClick={handleClick} type="submit" id="btnElement">Submit</button>
                    </div>
                </form>
                
            </div>}
            {!dispState && 
            <>
                <div>Name: {nameState}</div>
                <div>Age: {ageState}</div>
                <button onClick={editHandler}>Edit</button>
            </>}
        </>
    )
}
export default GeneralInfo; 