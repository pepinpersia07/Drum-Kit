let drums = document.getElementsByClassName("drum")
for(let i=0;i<drums.length;i++)
{
    drums[i].addEventListener("click",handleclick)
}
function handleclick(){
    //this.style.color="black"
    let val = this.innerHTML
    makeSound(val)
    button_animation(val)
    }

document.addEventListener("keydown",function(event){
   
    makeSound(event.key)
    button_animation(event.key)
})


function makeSound(key){

    switch (key) {
        case 'w':
            let audio = new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case 'a':
            let audio1 = new Audio("sounds/kick-bass.mp3")
            audio1.play()
            break;
        case 's':
            let audio2 = new Audio("sounds/snare.mp3")
            audio2.play()
            break;
        case 'd':
            let audio3 = new Audio("sounds/tom-1.mp3")
            audio3.play()
            break;
        case 'j':
            let audio4 = new Audio("sounds/tom-2.mp3")
            audio4.play()
            break;
        case 'k':
            let audio5 = new Audio("sounds/snare.mp3")
            audio5.play()
            break;
        case 'l':
            let audio6 = new Audio("sounds/snare.mp3")
            audio6.play()
            break;
             
        default:
            break;
    
}
}

function button_animation(current_key)
{
    let active_button = document.querySelector("."+current_key)
    active_button.classList.add("pressed")

    setTimeout(function(){
        active_button.classList.remove("pressed")
    },100)
}




