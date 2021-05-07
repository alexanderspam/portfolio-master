import React, { useState } from "react"
import ReactDOM from "react-dom"
import gameMaker from '../images/gamemaker.jpg'

export const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={src} alt={alt} onClick={onClose}/>
      {caption.length > 0 && <div className="caption">{caption}</div>}
    </div>
  )
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showModal = () => setIsOpen(true)

  return (
    <div className="App">
      <img
        className="image"
        onClick={showModal}
        src={gameMaker}
        alt="Snow"
      />
      {isOpen && (
        <Modal
        src={gameMaker}
          alt="snow"
          caption="Gamemaker website, a site with games that lights up your day"
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
