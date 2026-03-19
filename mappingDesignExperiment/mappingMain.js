//find our elements
const stageContainer = document.getElementById('stage-container');
const circlebutton = document.getElementById('circle-button');
const changeRed = document.getElementById('change-red');
const changeCornflower = document.getElementById('change-cornflower');
const changeGreenyellow = document.getElementById('change-greenyellow');

let stagecontainerwidth = stageContainer.offsetWidth;
console.log(stagecontainerwidth);
let satgecontainerHeight = stageContainer.offsetHeight
console.log(satgecontainerHeight);

let circleColour = "red"

// create the Konva stage
const stage = new Konva.Stage({
    container: 'konva-stage',
    width: window.innerWidth,
    height: window.innerHeight
});

//create our layer
const firstlayer = new Konva.Layer();

//add the layer to our stage
stage.add(firstlayer);

//ass interaction to button
function drawNewcircle(){
    const circle = new Konva.Circle({
        x: stage.width() * Math.random(),
        y: stage.height() * Math.random(),
        radius: 50 * Math.random(),
        fill: circleColour
    })
//add the first circle to our layer
    firstlayer.add(circle);
}

circlebutton.addEventListener("click", drawNewcircle);

//changing our circle colour
//I choose radio buttons because they allows
//
//to change my colouor, I need to find the value off the input click

function changeColourRadio(clickEvent){
    //find the value of the
    let newColour = clickEvent.target.value;
    //set the value
    circleColour = newColour;
}

//add eventlistner
changeRed.addEventListener("click", changeColourRadio);
changeCornflower.addEventListener("click", changeColourRadio);
changeGreenyellow.addEventListener("click", changeColourRadio);