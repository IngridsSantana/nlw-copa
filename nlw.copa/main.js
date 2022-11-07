function createGame(player1, hour, player2) {
  return `
   <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
            </li>
  `
}
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
     <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
         </ul>
      </div>
  `
}

document.querySelector('#app').innerHTML =`
    <header>
         <img src="./assets/logo.svg" alt="logo da NLW">
      </header>
    <main id="cards">
      ${createCard('24/11','quinta', 
        createGame("suica", "07:00", "camaroes") + createGame("portugal", "13:00", "gana") + createGame("brasil", "16:00", "servia")
        )}
      ${createCard('28/11','segunda', 
      createGame("coreiadosul", "10:00", "gana") + createGame("brasil", "13:00", "suica") + 
      createGame("portugal", "16:00", "uruguai")
      )}
      
      

    </main>
`