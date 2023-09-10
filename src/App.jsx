import { useState } from 'react'
import './App.css'

function App() {

  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', {
    "method":"GET",
    "headers": {
      'X-RapidAPI-Key': 'c12851fd20msh21d808cb922c788p103241jsn91fe9186b684',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  })
 
.then(response => { 
  console.log(response.json())
})

.catch(err => {
  console.log(err);
})

  return (
    <div>

      <form>
        
        <input type='text' />
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default App
