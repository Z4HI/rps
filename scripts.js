
const selectionButtons = document.querySelectorAll('[data-choice]');
const userscore = document.querySelector('.userscore')
const computerscore = document.querySelector('.computerscore')
var userblock = document.querySelector('.user')
var computerblock = document.querySelector('.computer')
const buttonchoice = document.querySelectorAll('.choice')
const userblockscissor = document.querySelector('#scissor')
const userblockpaper = document.querySelector('#paper')
const userblockrock = document.querySelector('#rock')
const cpublockrock = document.querySelector('#rock1')
const cpublockpaper = document.querySelector('#paper1')
const cpublockscissor = document.querySelector('#scissor1')
const userdisabled = document.querySelector('.user')
const header = document.querySelector('.header')

const SELECTIONS = [
    {
    name: 'rock',
    emoji:"✊",
    beats: 'scissors'
    },
    {
    name: 'paper',
    emoji:"✋",
    beats: 'rock'
    },
    {
    name: 'scissors',
    emoji:"✌️",
    beats: 'paper'
    }
]

selectionButtons.forEach(selectionButtons =>{
    selectionButtons.addEventListener('click',()=>{
        const userChoice = selectionButtons.dataset.choice;
        const selection = SELECTIONS.find(selection => selection.name === userChoice);
        userandcomputerselections(selection)
        
    })
})

function userandcomputerselections(userChoice){
    const computerChoice = getComputerchoice()
    const userWins = isWinner(userChoice,computerChoice)
    const computerWins = isWinner(computerChoice,userChoice)
    
    
    if(computerWins)incrementscore(computerscore)
    if(userWins)incrementscore(userscore)
    Color(userChoice,computerChoice)
    Checkscore(userscore,computerscore)
  }
function Color(userChoice,computerChoice){
    
    if(userChoice.name == 'rock'){
        userblockrock.style.backgroundColor = "#3C2A21"
        userblockscissor.style.backgroundColor = ""
        userblockpaper.style.backgroundColor = ""}
    if(userChoice.name == 'paper'){
        userblockpaper.style.backgroundColor = "#553939"
        userblockrock.style.backgroundColor = ""
        userblockscissor.style.backgroundColor = ""  }
    if(userChoice.name == 'scissors'){
        userblockscissor.style.backgroundColor = "#EBE3D5"
        userblockrock.style.backgroundColor = ""
        userblockpaper.style.backgroundColor = ""}
   

    if(computerChoice.name == 'rock'){
        cpublockrock.style.backgroundColor = "#3C2A21"
        cpublockscissor.style.backgroundColor = ""
        cpublockpaper.style.backgroundColor = ""}
    if(computerChoice.name == 'paper'){
        cpublockpaper.style.backgroundColor = "#553939"
        cpublockscissor.style.backgroundColor = ""
        cpublockrock.style.backgroundColor = ""}    
    if(computerChoice.name == 'scissors'){
        cpublockscissor.style.backgroundColor = "#EBE3D5"
        cpublockpaper.style.backgroundColor = ""
        cpublockrock.style.backgroundColor = ""} 
}

  function Checkscore(userscore,computerscore){

    if(userscore.innerHTML == '5' ){
        userdisabled.style.pointerEvents = 'none'
        header.innerText = 'You WIN'
    }
    if(computerscore.innerHTML == '5'){
        userdisabled.style.pointerEvents = 'none'
        header.innerText = 'You LOSE'
    }
  }

function getComputerchoice(){
const randomnumber = Math.floor(Math.random() * SELECTIONS.length)
return SELECTIONS[randomnumber];
}

function isWinner(selection, selection2){
    if(selection.beats === selection2.name){
        header.innerHTML = (selection.name + ' beats ' + selection2.name).toUpperCase()
return selection}
else if(selection.name == selection2.name){
    header.innerHTML = 'TIE' 
    }
}
function incrementscore(scoreSpan){

scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML)+1
}



