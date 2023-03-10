import React from 'react';


function Hello(props) {
  return (
    <div>
       <h1>Hello {props.name}</h1>
       <p> I am {props.age} years old.</p>
    </div>
  )
}

export default Hello;
