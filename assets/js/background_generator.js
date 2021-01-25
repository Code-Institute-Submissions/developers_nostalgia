// ----------------------------------------------------------------- VARIABLES

// DOM
const fullCssCheckBox = document.querySelector("#full-css-checkbox");
const copiedTooltip = document.querySelector(".copied-tooltip");
const bgMainContainer = document.querySelector(".bg-main-cont");
const bgInfoContainer = document.querySelector(".bg-info-cont");
const copiedCode = document.querySelector(".copied-code");
const hiddenText = document.querySelector(".hidden-txt");
const colorName = document.querySelector("#color-name");
const rgbName = document.querySelector(".color-rgb");
const rgbaName = document.querySelector(".color-rgba");
const hexInput = document.querySelector("#hex-input");
const rgbInput = document.querySelector("#rgb-input");
const rgbaInput = document.querySelector("#rgba-input");

// All hex color components
const hexColorComponents = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];

// String (hex/rgb/rgba)
let hexResult;
let rgbResult;
let rgbaResult;

// Current hex/rgb/rgba
let hexCode;
let rgbCode;
let rgbaCode;


// ----------------------------------------------------------------- FUNCTIONS


// Toggles Hidden Text
const toggleHiddenText = () => hiddenText.classList.toggle("appear");


// Creates a random hex value by picking random elements from hexColor array
const createHex = () => {
    let hex = '';
    
    // fills empty hex variable with random elements to create hex color
    for (let i = 0; i < 6; i++) {
        let randomEl = Math.floor(Math.random() * hexColorComponents.length); 
        
        hex += hexColorComponents[randomEl];
    }
    // changes background and name (random hex color)
    bgMainContainer.style.backgroundColor = `#${hex}`;
    colorName.innerText = `#${hex}`;
    // pastes hex into input
    hexInput.value = fullCssCheckBox.checked ? `background: #${hex};` : `#${hex}`;
    // calls rgb and rgba functions
    toRgb(hex);
}


// Converts hex to rgb and rgba and displays them
const toRgb = (hex) => {
    let hexSplit = hex.match(/.{1,2}/g);
    let rgb = [
        parseInt(hexSplit[0], 16),
        parseInt(hexSplit[1], 16),
        parseInt(hexSplit[2], 16)
    ]
    
    // rgb & rgba code
    hexCode = `#${hex}`;
    rgbCode = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    rgbaCode = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
    
    // results - depending if checked
    hexResult = fullCssCheckBox.checked ? `background: ${hex};` : hex;
    rgbResult = fullCssCheckBox.checked ? `background: ${rgbaCode};` : rgbaCode;
    rgbaResult = fullCssCheckBox.checked ? `background: ${rgbaCode};` : rgbaCode;
    
    // displays rgb & rgba
    rgbName.innerText = rgbCode;
    rgbaName.innerText = rgbaCode;
    
    // pastes rgb & rgba into input
    rgbInput.value = rgbResult;
    rgbaInput.value = rgbaResult;
    hiddenText.innerText = rgbaResult;
}


// CLICK - Event listener for Checkbox
fullCssCheckBox.addEventListener("click", () => {
    let currentInputValHex = hexCode;
    let currentInputValRbg = rgbCode;
    let currentInputValRbga = rgbaCode;
    
    // If checked - 'background: value;' | else - 'value'
    if (fullCssCheckBox.checked) {
        hexInput.value = `background: ${currentInputValHex};`
        rgbInput.value = `background: ${currentInputValRbg};`
        rgbaInput.value = hiddenText.innerText = `background: ${currentInputValRbga};`
    } else {
        hexInput.value = currentInputValHex;
        rgbInput.value = currentInputValRbg;
        rgbaInput.value = hiddenText.innerText = currentInputValRbga;
    }
});


// Copies slected color (hex/rgb/rgba) code to clipboard
const copyColor = code => {
    let colorInput;
    
    switch(code) {
        case "hex":
            colorInput = hexInput;
            break;
        case "rgb":
            colorInput = rgbInput;
            break;
        case "rgba":
            colorInput = rgbaInput;
    }
    colorInput.select();
    /* for mobile */
    colorInput.setSelectionRange(0, 99999); 
    /* copies text inside  text field */
    document.execCommand("copy");
    
    // call animaiton
    copiedAnimation(code);
}


// Makes Tooltip appear, pulse & disappear (animation)
const copiedAnimation = code => {
    copiedCode.innerText = `copied: ${code}`;
    copiedTooltip.classList.remove("opacity");
    copiedTooltip.classList.add("pulse-animation");
    setTimeout(() => {
        copiedTooltip.classList.add("opacity");
        copiedTooltip.classList.remove("pulse-animation");
    }, 1000); 
}


// Creates first random color (start program)
createHex();
