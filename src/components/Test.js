import React, {useRef, useState} from 'react'

const Test = () => {
 let [name, setName] = useState("Ned Stark");
 // we declare the input inside the variable
 let nameRef = useRef();
 // we are referring to input to change the value 
 const submitButton = () => {
    setName(nameRef.current.value);
 };

 return(
    <div className="App">
        <p>{name}</p>
        <h4>Who is your favourite game of thrines character</h4>

        <div>
            <input 
            placeholder="enter your preferred GOT character..."
            ref={nameRef}
            type = "text"/>
            <button type='button' onClick={submitButton}>
                Submit
            </button>
        </div>

    </div>
 )
}

export default Test
