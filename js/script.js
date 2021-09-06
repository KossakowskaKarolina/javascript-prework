function playGame(playerInput){

  clearMessages()
  
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

  printMessage('Mój ruch to: ' + argComputerMove);


  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

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
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});