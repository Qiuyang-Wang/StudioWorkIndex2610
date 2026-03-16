//find elements to use
const introDialog=document.getElementById("intro-dialog");
const dialogcloseButton=document.getElementById("dialog-close-button");
const playButton=document.getElementById("play-button");

//intro dialog setups
introDialog.showModal();

function closeDialog(){
    introDialog.close();
    Tone.start()
}

dialogcloseButton.addEventListener("click",closeDialog);

//tone synth init
const synth = new Tone.Synth().toDestination();

//play sound withtone
function playNote(){
    synth.triggerAttackRelease("C4", "8n");
}

function startNote(){
    synth.triggerAttack("C4");
    document.body.style.backgroundColor="#0bcd98";
}

function endNote(){
    synth.triggerRelease()
    document.body.style.backgroundColor="white";
}

playButton.addEventListener("click",playNote);
playButton.addEventListener("mousedown",startNote);
playButton.addEventListener("mouseup",endNote);

playButton.addEventListener("mouseenter",()=>{
    console.log("Mouse entered the button,ready to play sound")
});

playButton.addEventListener("mouseleave",()=>{
    console.log("Mouse leave button");
    synth.triggerRelease();
    document.body.style.backgroundColor="white";
})