import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumeber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeignt = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeignt.oninput = () => AlertError.close()

form.onsubmit = event =>{
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeignt.value

  const weightOrHeightIsNotANumber = notNumeber(weight) || notNumeber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}