//find elements to use
const introDialog=document.getElementById("intro-dialog");
const dialogcloseButton=document.getElementById("dialog-close-button");
const playButton=document.getElementById("play-button");

//intro dialog setups
introDialog.showModal();

// Function to close the introduction dialog and start the Tone.js audio context
function closeDialog(){
    introDialog.close();
    Tone.start()
}

// Attach a click event listener to the close button to trigger the closeDialog function
dialogcloseButton.addEventListener("click",closeDialog);

//tone synth init
const synth = new Tone.Synth().toDestination();

//play sound withtone
function playNote(){
    synth.triggerAttackRelease("C4", "8n");
}

// Function to start a sustained note (hold the note until released)
function startNote(){
    synth.triggerAttack("C4");
    //A vibrant green that stands out clearly when it changes, creating a macaron-inspired colour scheme alongside the button colours
    document.body.style.backgroundColor="#0bcd98";
}

// Function to stop the currently playing sustained note
function endNote(){
    synth.triggerRelease()
    document.body.style.backgroundColor="white";
}

// Attach click event listener to play a short note
playButton.addEventListener("click",playNote);
// Attach mousedown event listener to start a sustained note when the button is pressed
playButton.addEventListener("mousedown",startNote);
// Attach mouseup event listener to end the sustained note when the button is released
playButton.addEventListener("mouseup",endNote);

// Attach mouseenter event listener to log a message when the mouse hovers over the button
playButton.addEventListener("mouseenter",()=>{
    console.log("Mouse entered the button,ready to play sound")
});

// Attach mouseleave event listener to handle mouse exiting the button
playButton.addEventListener("mouseleave",()=>{
    console.log("Mouse leave button");
    synth.triggerRelease();
    document.body.style.backgroundColor="white";
})