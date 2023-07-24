import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import About from './About'

// Define the App component using an arrow function
export default function Main() { 
  // Use the useState hook to create two state variables: 'name' and 'showWelcome'
  const [name, setName] = useState("")
  const [showWelcome, setShowWelcome] = useState(false)

  // Define a function to handle changes to the name input field
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  // Define a function to handle the form submission event using the built in method of event - preventDefault()
  const handleFormSubmit = (event) => {
    event.preventDefault()
    setShowWelcome(true)
  }
  // Return the JSX for the App component, including a form with an input field for the user's name
  return (
    <center>
    <div className='main--body'>
      <h1 className='main--welcome'>Enter the Silicon Rhode</h1>
        
    <form onSubmit={handleFormSubmit}>
      <input 
        id='name-input' 
        type='text' 
        value={name} 
        onChange={handleNameChange} 
        placeholder='Enter your name' 
        required 
        />
      <button type='submit'>Submit</button>
    </form>
    { /*If the showWelcome state variable is true, display a welcome message   */ }
    {showWelcome && <p>Welcome, {name}!</p>}
        <About name={name} /> {/* Pass the name state as a prop to About component */}
      </div>
    </center>
  );
  
}




