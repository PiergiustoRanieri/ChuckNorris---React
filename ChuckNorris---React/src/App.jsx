import { useState } from 'react'
import './App.css'
import Chuck from './assets/chuck-icon.svg'
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

    /* Funzione per renderizzare l'elenco delle categorie del joke */
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

    /*Funzione per displayare il joke a schermo*/
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

    /* Funzione per far copiare il testo all'utente */
    function copy(){
      if(joke != ""){
        navigator.clipboard.writeText(joke)
        alert("Il testo è stato copiato")
      }
    }

    /* Corpo della pagina */
    return (
      <div className="App">
        <div id='container'>
        <h1 id='title'>Webapp API Chuck Norris</h1>
        <p id='desc'>Design di una pagina che utilizza la API di <a href="https://api.chucknorris.io/">chucknorris.io</a> per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</p>
        <img id='chuck-image' src={Chuck} alt="Chuck Norris" />
        <Dropdown selection={dropdown} clbk={RenderDropdown} handler={userSelectionHandler} />
        {joke != "" &&
          <JokeRender joke={joke}/>
          } 
        <Buttons text="Carica Foto" variant={"active"}  styles={"margin-top-20"} clbk={() => JokeDisplay()}/>
        <Buttons text="Copia Testo" variant={joke === "" ? "disabled" : "active"} styles={"margin-top-20"} clbk={copy}/>
        </div>
      </div>
    )
}

export default App
