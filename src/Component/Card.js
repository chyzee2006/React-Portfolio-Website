import React from 'react'

function Card(props) {
  return (
    <div key={props.name}>
          <h2>{props.name}</h2>
          <p>Category: {props.category}</p>
          <p>Start: {props.start}</p>
          <p>End: {props.end}</p>
    </div>
  )
}


export default Card