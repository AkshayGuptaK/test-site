document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!')
}

var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/blackout-main.png') {
      myImage.setAttribute ('src','images/blackout-alt.png')
    } else {
      myImage.setAttribute ('src','images/blackout-main.png')
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

var displayString = 'Werewolf: Blackout\nWelcome '

function setUserName() {
  var myName = prompt('Please enter your name.')
  localStorage.setItem('name', myName)
  myHeading.textContent = displayString + myName
}

if(!localStorage.getItem('name')) {
  setUserName()
} else {
  var storedName = localStorage.getItem('name')
  myHeading.textContent = displayString + storedName
}

myButton.onclick = function() {
  setUserName()
}
