import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {
  
  const [endPoint, setEndPoint] = useState('')
  const [container, setContainer] = useState([])

  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', {
    "method": "GET",
    "headers": {
      'X-RapidAPI-Key': 'c12851fd20msh21d808cb922c788p103241jsn91fe9186b684',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
    })

    .then(response => {
      console.log(response.json())
    })

    .then(data => {
      setContainer(data)
    })

    .catch(err => {
      console.log(err);
    })

    const onChangeHandler = (e) => {
      setEndPoint(e.target.value)
    }

    const submitHandler = e => {
      e.preventDefault()
    }
    
 
  



  return ( 
    <div>

      <form onSubmit={submitHandler}>

        <input type='text' value={endPoint} onChange={onChangeHandler} />
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
};

export default App
