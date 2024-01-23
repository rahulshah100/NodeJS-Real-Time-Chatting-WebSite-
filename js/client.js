// connect frontend js script with backend server io
const socket = io('http://localhost:8000')

const form = document.getElementById('send-container')
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector('.container')
var audio = new Audio('ting.wav')

const append = (message, position, className) => {
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageElement.classList.add(`${className}`)
    messageElement.classList.add(`${position}`)
    messageContainer.append(messageElement)
    if (position == "left" && className=="message") {
        audio.play()
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    append(`<b>You:</b> ${messageInput.value}`, 'right', 'message')
    socket.emit('send', messageInput.value)
    messageInput.value = ""
})

const name = prompt("Enter your name to join")

// Trigger new-user-joined event in server and pass name-variable to that call
socket.emit('new-user-joined', name)
append(`You joined the chat as - <b>${name}</b>`, 'right', 'joining')

// Listening to server call
socket.on('user-joined', name => {
    append(`<b>${name}</b> joined the chat`, 'left', 'joining')
})

socket.on('receive', data => {
    append(`<b>${data.name}:</b> ${data.message}`, 'left', 'message')
})

socket.on('left', name => {
    append(`<b>${name}</b> left the chat`, 'left', 'leftChat')
})