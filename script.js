function carregar() {

  const msgHours = window.document.getElementById('msg-hours')
  const dayHours = window.document.getElementById('day-hours')

  const date = new Date()
  const hora = addZero(date.getHours())
  const min = addZero(date.getMinutes())

  
  msgHours.innerHTML = `Right now is ${hora}:${min}`

  function addZero(i) {
   if (i < 10) {
    i = "0" + i;
   }
   return i;
  };

  if (hora >= 0 && hora < 12) {
     document.body.style.backgroundImage = "url('https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
     dayHours.innerHTML = `Good Morning!`
    
  } else if (hora >= 12 && hora < 18) {
     document.body.style.backgroundImage = "url('https://images.pexels.com/photos/733174/pexels-photo-733174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
     
     dayHours.innerHTML = `Good Afternoon!`
  
  } else {
     document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
     dayHours.innerHTML = `Good Evening!`

  }
}

