import React, {useState} from "react";




export const ActiveToggle = ({value, x, handleToggle}) => {
    const [toggle, setToggle] = useState(value);
    

    const toggleHandler = () => {
        setToggle(!toggle)
        if(toggle == true){
            handleToggle(x._id)
        } else {
            handleToggle(x._id)
       } 
    }

    
    
    return(
        <button onClick={toggleHandler}>
            {toggle == true ? 'Disable' : "Activate"} 
        </button> 
        )
    }

    