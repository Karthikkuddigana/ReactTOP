import { useState } from "react";

function ListItem({animal}) {
    return <li>{animal}</li>
  }
  function List({animals}) {
    return (
      <ul>
        {animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
  }
  function ButtonComponent(props){
    return (
        <button onClick={props.clickHandle}>Click Me</button>
    )
  }

function TestComponent(){
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const [count,setCount]=useState(0); 
    const clickHandle=()=>{
        setCount(count+1); 
        const displayVariable=document.getElementById("displayVariable"); 
        displayVariable.innerHTML=count; 
      }
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
        <div id="displayVariable"></div>
        <ButtonComponent clickHandle={clickHandle}></ButtonComponent>
      </div>
    );
    
}

export default TestComponent; 