import React from 'react'
import '../styles/Button.css'
const Buttons = ({text, variant, clbk, styles}) => {

  function renderClasses(){
    let classes = [
      'buttons', variant, styles
    ]
    return classes.join(" ")
  }
  return (
    <div>
      <button className={renderClasses()} onClick={clbk}>{text}</button>
    </div>
  )
}

export default Buttons