//find our elements
const stageContainer = document.getElementById('stage-container');
const circlebutton = document.getElementById('circle-button');
const changeLightcyan = document.getElementById('change-lightcyan');
const changeLightblue = document.getElementById('change-lightblue');
const changeLightskyblue = document.getElementById('change-lightskyblue');

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

// Attach a click event listener to the circle button to trigger drawing a new circle
circlebutton.addEventListener("click", drawNewcircle);

// Function to update the global circle color based on radio button selection
function changeColourRadio(clickEvent){
    // Extract the color value from the clicked radio button's 'value' attribute
    let newColour = clickEvent.target.value;
    // Update the global 'circleColour' variable to the new selected color
    circleColour = newColour;
}

// Attach click event listeners to color selection radio buttons
// These buttons will update the circle color when clicked
changeLightcyan.addEventListener("click", changeColourRadio);
changeLightblue.addEventListener("click", changeColourRadio);
changeLightskyblue.addEventListener("click", changeColourRadio);