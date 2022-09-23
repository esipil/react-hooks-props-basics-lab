import React from 'react'

function Link(props) {
  return (
    <div style={{align:'center'}}>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  )
}

export default Link