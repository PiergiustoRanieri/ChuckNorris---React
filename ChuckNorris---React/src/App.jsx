import { useState } from 'react'
import './App.css'
import Chuck from './src/assets/chuck-icon.svg'
import Dropdown from './components/Dropdown'
import Buttons from './components/Button'
import JokeRender from './components/JokeRender'

function App() {
    const [dropdown, setDropdown] = useState([])
    const [joke, setJoke] = useState("")
    const [userSelection, setUserSelection] = useState("")
  
    function userSelectionHandler(e){
      setUserSelection(e)
    }

    function RenderDropdown(){
        let url = 'https://api.chucknorris.io/jokes/categories'
        let promise = fetch(url)
  
        promise.then(
        response => response.json()
      ).then(
          data => {
            data.forEach(element => {
              let obj = data.map(function(item, index){
                return {
                  id: index,
                  value: item
                }
              })
              setDropdown(obj)
            });
          }
      )
    }

    function JokeDisplay(){
      if(userSelection != ""){
        let url = `https://api.chucknorris.io/jokes/random?category=${userSelection}`
        let promise = fetch(url)
        
        promise.then(
          response => response.json()
        ).then(
          data => setJoke(data.value)
        ) 
      }else{
        let url = `https://api.chucknorris.io/jokes/random`
        let promise = fetch(url)
        
        promise.then(
          response => response.json()
        ).then(
          data => setJoke(data.value)
        ) 
        
      }
    }

    function copy(){
      if(joke != ""){
        navigator.clipboard.writeText(joke)
        alert("Il testo è stato copiato")
      }
    }

    
}

export default App
