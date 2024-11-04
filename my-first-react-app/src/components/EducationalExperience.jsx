import { useState } from "react";
function DispMode({gradState,schoolState,editHandler}){
    return (<>
        <div>Graduation: {gradState}</div>
        <div>School: {schoolState}</div>
        <button onClick={editHandler}>Edit</button>
    </>)
}

function EducationalExperience(){
    const [dispState,myDispState]=useState(true); 
    const [gradState,setGrad]=useState(""); 
    const [schoolState, setSchool]=useState(""); 
    const handleChangeGrad=(e)=>{
        setGrad(e.target.value)
    }
    const handleChangeSchool=(e)=>{
        setSchool(e.target.value); 
    }
    const handleClick=()=>{
        myDispState(false); 
    }
    const editHandler=()=>{
        myDispState(true); 

    }
    return (
        <>  
            {dispState && <div id="Content">
                <form>
                    <div>
                        <label htmlFor="Graduation">Graduation:</label>
                        <input type="text" id="Graduation" onChange={handleChangeGrad} value={gradState}required/>
                    </div>
                    <div>
                        <label htmlFor="school">School:</label>
                        <input type="text" id="school" onChange={handleChangeSchool} value={schoolState}required/>
                    </div>
                    <button onClick={handleClick} type="submit">Submit</button>
                </form>
                
            </div>}
            {!dispState && <DispMode gradState={gradState} schoolState={schoolState} editHandler={editHandler}></DispMode>}
        </>
    )
}
export default EducationalExperience; 