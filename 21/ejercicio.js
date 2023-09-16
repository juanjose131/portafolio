let scores = [0,0]


function generateCard() {
    return Math.floor(Math.random() * 10) + 1
}


function determineWinner(scores) {
    let player1Score = scores[0]
    let player2Score = scores[1]
    let result = ''

    if (player1Score > 21 && player2Score > 21) {
        result = 'Ambos jugadores pierden  '
    } else if (player1Score > 21) {
        result = 'jugador 2 gana'
    } else if (player2Score > 21) {
        result = 'Jugador 1 gana'
    } else if (player1Score === player2Score) {
        result = 'Empate'
    } else if (player1Score > player2Score) {
        result = 'jugador 1 gana!'
    } else {
        result = 'jugador 2 gana!'
    }

    document.getElementById('result').innerHTML = result
}

function playerSkip(player) {
    document.getElementById('buttonSkip' + player).style.display = 'none'
    document.getElementById('buttonOther' + player).style.display = 'none'

    if (player === 2) {
        determineWinner(scores)
    }
}

function playerRequestOtherCard(player) {
    const newCard = generateCard()
    const sumPlayerScore = scores[player - 1] + newCard
    scores[player - 1] = sumPlayerScore
    document.getElementById('scoreboard' + player).innerHTML = `
    Player ${player} Score: ${scores[player - 1]} 
    `

    if (sumPlayerScore > 21) {
        document.getElementById('result').innerHTML = `Player ${player} lost`
    }

    if (player === 2) {
        determineWinner(scores)
    }
}


function updateScoreboard(scores) {
    let player1Score = scores[0]
    let player2Score = scores[1]
    document.getElementById('scoreboard1').innerHTML = `
    Player 1 Score:   ${player1Score}
    <button onclick='playerSkip(1)' id='buttonSkip1'=>Plantar</button>
    <button onclick='playerRequestOtherCard(1)' id='buttonOther1'>Pedir otra carta</button>
`
    document.getElementById('scoreboard2').innerHTML = `
    Player 2 Score:   ${player2Score}
    <button onclick='playerSkip(2)' id='buttonSkip2'=>Plantar</button>
    <button onclick='playerRequestOtherCard(2)' id='buttonOther2'>Pedir otra carta </button>`
}


function playRound() {
    let round = 1

    while (round <= 2) {

        let cardPlayer1 = generateCard()
        scores[0] += cardPlayer1
        
        let cardPlayer2 = generateCard()
        scores[1] += cardPlayer2

        round++
    }

    updateScoreboard(scores)

    document.getElementById('buttonStart').style.display = 'none'
}
