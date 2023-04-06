import React from 'react'

const Greet = (props) => {

    let age = 50
    const handleclick = () => {
        age = 60
        console.log(age);
    }
  return (
    <div>
     {<h1>Hi, my name is {props.name}</h1>}
     {age}
    <button onClick={handleclick}>Click here</button>
    </div>
  )
}

export default Greet;
