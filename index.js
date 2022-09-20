
// DETECTING BUTTON PRESS
const arrOfButtons = document.getElementsByTagName('button')
for (let i = 0; i < arrOfButtons.length; i++) {
    arrOfButtons[i].addEventListener("click", function() {
       
    let buttonInner = this.innerHTML;

    // console.log(this);
    // console.log(this.innerHTML)

    makeSound(buttonInner);
    buttonAnimation(buttonInner);

});
}
       
// DETECTION KEYBOARD PRESS
document.addEventListener("keydown", function(event){
    
    // console.log(event);
    // console.log(event.key);

    makeSound(event.key);
    buttonAnimation(event.key);

});

    

// FUNCTION FOR AUDIO
function makeSound(key){
    switch (key) {
        case 'w':
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case 'a':
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case 's':
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case 'd':
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case 'j':
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
        case 'k':
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case 'l':
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        default: console.log('not a button')
        break;
    }
}


// ANIMATING BUTTONS
function buttonAnimation(currentKey) {
   let activeButton = document.querySelector('.' + currentKey)
   activeButton.classList.add('pressed');
   setTimeout(function() {
    activeButton.classList.remove('pressed')}, 100);
   } 