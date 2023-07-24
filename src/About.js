import React, {useState} from 'react'
import Main from "./Main"


export default function About(props) {
    return (
    <div>
    <h1>{props.name}, This is the "About" section</h1>
    <p>Name from Main component: {props.name}</p> {/* Access the name prop */}
    </div>
  )
}