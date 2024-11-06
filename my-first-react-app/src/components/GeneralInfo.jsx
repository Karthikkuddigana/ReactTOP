import { useEffect, useState } from "react";
import "./GeneralInfo.css"; 
function GeneralInfo(){
    const [dispState,myDispState]=useState(true); 
    const [nameState,setName]=useState(""); 
    const [ageState, setAge]=useState(""); 
    const [details,setDetails]=useState(); 
    const [isLoading,setIsLoading]=useState(true); 
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
    useEffect(()=>{fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then((json)=>{
        console.log(json); 
        setDetails(json); 
        setIsLoading(false); 
    })},[]); 
    return (
        <>  
            {dispState && <div id="ContentGeneralInfo">
                <div>
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
                    {!isLoading && details.map((details)=><div key={details.id}>
                        <div>{details.username}</div>
                        <div>{details.password}</div>
                        </div>)}
                    {isLoading && <div>Still Loading</div>}
                </div>
                
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