import { useState } from 'react'
import './App.css'
import Chuck from './src/assets/chuck-icon.svg'
import Dropdown from './components/Dropdown'
import Buttons from './components/Button'
import JokeRender from './components/JokeRender'

function App() {
    const [dropdown, setDropdown] = useState([])
    const [joke, setJoke] = useState("")
    const [userselection, setUserselection] = useState("")
  
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
}

export default App
