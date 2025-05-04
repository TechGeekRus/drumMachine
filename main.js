// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3')
const tock = new Audio('sounds/tock.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')

//Get checkbox elements
const metronomeCheckbox = document.getElementById('metronome')
const hiHatCheckbox = document.getElementById('hi-hat')
const kickCheckbox = document.getElementById('kick-drum')
const snareCheckbox = document.getElementById('snare-drum')

// Get timing input elements
const kickTiming = document.querySelector('#kick-timing')
const snareTiming = document.querySelector('#snare-timing')
const hiHatTiming = document.querySelector('#hihat-timing')

// Get count display element
const countDisplay = document.getElementById('metronome-count')

// This function is called every 600ms
let counter = 0
let count = 0
let metronomeClick = false

function update() {
    count++
    counter =(counter % 4) +1
         
    if(counter === 4){
        tock.play()
    }else{
    }
    // Play the 'tick' sound
    tick.play();
    if(hiHatCheckbox.checked && Number(hiHatTiming.value) === counter){
        hiHat.play()
    }
    if(kickCheckbox.checked) kickDrum.play()
    if(snareCheckbox.checked) snareDrum.play()
    if(metronomeCheckbox.checked) tick.play()

      document.body.addEventListener('click', () =>{
        const countElement = document.getElementById('metronome-count')
        countElement.innerText = 'Count: ' + count
        if(metronomeClick = false){
            setInterval(update, 600)
            metronomeClick = true
        }
      })  
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
