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

   //      ---        Exec-2        ---       // 


function check() {
   console.log(check)

   const date = new Date()
   const Year = date.getFullYear()
   const formYear = document.getElementById('txtyear')
   const resul = document.getElementById('res')
   if (formYear.value.length == 0 || Number(formYear.value) > Year) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
     
      const typeSex = document.getElementsByName('radsex')
      const yAge = Year - Number(formYear.value)
      var gender = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
         if (typeSex[0].checked) {
            gender = 'Man'
               if (yAge >=0 && yAge < 10) {
                  img.setAttribute('src', './images/child-boy.png')
               } else if (yAge < 21) {
                  img.setAttribute('src', 'wphoto-yong-boy.png')
               } else if (yAge < 50) {
                  img.setAttribute('src', './images/man.png')
               } else {
                  img.setAttribute('src', './images/old-man.png')
               }
         } else if (typeSex[1].checked) {
            gender = 'Woman'
               if (yAge >=0 && yAge < 10) {
                  img.setAttribute('src', './images/child-girl.png')
               } else if (yAge < 21) {
                  img.setAttribute('src', './images/girl.png')
               } else if (yAge < 50) {
                  img.setAttribute('src', './images/woman.png')
               } else {
                  img.setAttribute('src', './images/old-woman.png')
               }
         }
         resul.innerHTML = `Detected ${gender} with ${yAge} Years Old`;
         resul.appendChild(img)
   }
   

}


