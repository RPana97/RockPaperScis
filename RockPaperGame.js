
const hands = ['rock', 'paper', 'scissors']; 

function getHand() {
    switch  (parseInt(Math.random() * 10) % 3) {
        case 0 :
            return hands[0];
        case 1 :
            return hands[1];
        case 2 :
            return hands[2];
    }   
}

let player1 = {
    name : 'Player 1',
    hand : null,
    totalWins : 0,
}
let player2 = {
    name :'Player 2',
    hand : null,
    totalWins : 0,
}

let playUntil = 3;

function playRound(player1, player2){
    player2.hand = getHand();

    console.log ('');
    console.log (`${player1.name} : ${player1.hand}   vs.   ${player2.name} : ${player2.hand}`)
        if ((player1.hand =='rock' && player2.hand =='scissors') ||
            (player1.hand =='paper' && player2.hand =='rock') ||
            (player1.hand =='scissors' && player2.hand =='paper')) {
            player1.totalWins++;
            document.getElementById('Narrator').textContent = `${player1.name} Wins the round!`;
            return console.log (`${player1.name} wins the round! ${player1.name} total wins: ${player1.totalWins}`)

        } else if ((player2.hand =='rock' && player1.hand =='scissors') ||
                   (player2.hand =='paper' && player1.hand =='rock') ||
                   (player2.hand =='scissors' && player1.hand =='paper')) {
                    player2.totalWins++;
                    document.getElementById('Narrator').textContent = `${player2.name} wins the round!`;
                    return console.log (`${player2.name} wins the round! ${player2.name} total wins: ${player2.totalWins}`)

        } else if ((player1.hand =='rock' && player2.hand =='rock') ||
                   (player1.hand =='paper' && player2.hand =='paper') ||
                   (player1.hand =='scissors' && player2.hand =='scissors')) {
                    document.getElementById('Narrator').textContent = `It's a tie!`;
                    return console.log (`It's a tie!`);
        }   
}

function changePlayerName () {
    document.getElementById ('submitBtn').addEventListener('click', function(event) {
        event.preventDefault();
        let userName = document.getElementById('username').value;
        player1.name= userName;
        console.log (`Player name changed to : ${player1.name}`);
        document.getElementById('playerNameHeader').textContent = userName;
        document.getElementById ('nameSubmit').reset();
});
}

function clickPlay () {
    document.getElementById ('playBtn').addEventListener('click', function(event) {
        event.preventDefault();
        if (player1.hand){
        playRound (player1,player2);

        document.getElementById('player2Hand').textContent = player2.hand;
        document.getElementById('totalWins1').textContent = player1.totalWins;
        document.getElementById('totalWins2').textContent = player2.totalWins;

        if (player1.totalWins >= playUntil || player2.totalWins >= playUntil) {
            // Display winner
            let winner = player1.totalWins >= playUntil ? player1 : player2;
            console.log(`${winner.name} is the winner of the game!`);
            document.getElementById('Narrator').textContent = `${winner.name} wins the game!`;
            // Reset totalWins for next game
            player1.totalWins = 0;
            player2.totalWins = 0;
        }
        }
        else {
            console.log (`Please select a hand.`);
        }
});
}

function selectHand(hand) {
    player1.hand = hand;
    document.getElementById('playerHand').textContent = hand;
    console.log("User selected: " + player1.hand);
}

changePlayerName();
selectHand();
clickPlay ();

