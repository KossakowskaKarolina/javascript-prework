function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);


console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
} */

printMessage('Twój ruch to: ' + argPlayerMove);


function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if(argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } else if(argPlayerMove == 'nieznany ruch'){
    printMessage('Możesz wybrać tylko spośród 1, 2 lub 3! Wybierz ponownie swój ruch.');
  } else{
    printMessage('Ty przegrywasz!');
  }
}

displayResult(argComputerMove, argPlayerMove);

/*
if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ty przegrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
} else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Możesz wybrać tylko spośród 1, 2 lub 3! Wybierz ponownie swój ruch.');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty przegrywasz!');
} else if(computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
} else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('Możesz wybrać tylko spośród 1, 2 lub 3! Wybierz ponownie swój ruch.');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
} else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('Możesz wybrać tylko spośród 1, 2 lub 3! Wybierz ponownie swój ruch.');
} */