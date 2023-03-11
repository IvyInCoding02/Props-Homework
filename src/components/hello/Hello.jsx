import React from 'react';


function Hello(props) {
  return (
    <div>
       <p>Hello {props.name}</p>
       <p> I am {props.age} years old.</p>
    </div>
  )
}

export default Hello;
