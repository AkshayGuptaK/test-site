var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/blackout-main.png') {
      myImage.setAttribute ('src','images/blackout-alt.png')
    } else {
      myImage.setAttribute ('src','images/blackout-main.png')
    }
}
