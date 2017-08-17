var clickSwitch = document.querySelector('.switch.on');
var changeLight = document.querySelector('.light');
var changeText = document.querySelector('.status');

clickSwitch.addEventListener('click', function(eventObject){
  if (clickSwitch.className === 'switch on') {
    clickSwitch.className = 'switch off'
    changeLight.className = 'dark'
    changeLight.style.background = 'black'
    changeText.innerText = 'Hey, who turned off the lights?'
    changeText.style.color = 'white'
    window.alert('switch was off!')
  }
  else {
    clickSwitch.className = 'switch on'
    changeLight.className = 'light'
    changeLight.style.background = 'white'
    changeText.innerText = 'It\'s so bright in here!'
    changeText.style.color = 'black'
    window.alert('switch was on!')
  }

})
