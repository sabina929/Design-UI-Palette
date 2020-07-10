var isSelectedColor1 = false;
var isSelectedColor2 = false;
var isSelectedColor3 = false;
var isSelectedColor4 = false;
var isSelectedColor5 = false;


var isSelectedCard1Background = false;
var isSelectedCard1Circle1 = false;
var isSelectedCard1Circle2 = false;
var isSelectedCard1Circle3 = false;
var isSelectedCard1Text = false;
var isSelectedCard1Button = false;
var isSelectedCard1ButtonText = false;


var isSelectedCard2Background = false;
var isSelectedCard2Circle1 = false;
var isSelectedCard2Circle2 = false;
var isSelectedCard2Circle3 = false;
var isSelectedCard2Text = false;
var isSelectedCard2Button = false;
var isSelectedCard2ButtonText = false;


const outputHueValue = document.querySelector(".output .hueValue");
const outputSaturationValue = document.querySelector(".output .saturationValue");
const outputBrightnessValue = document.querySelector(".output .brightnessValue");

const inputHue = document.querySelector("#hue");
const inputSaturation = document.querySelector("#saturation");
const inputBrightness = document.querySelector("#brightness");
// console.log(outputHueValue, outputSaturationValue, outputBrightnessValue)
// console.log(inputHue.value, inputSaturation.value, inputBrightness.value)

const colorOne = document.querySelector(".color.color1");
const colorTwo = document.querySelector(".color.color2");
const colorThree = document.querySelector(".color.color3");
const colorFour = document.querySelector(".color.color4");
const colorFive = document.querySelector(".color.color5");
const colorOneHexCode = colorOne.nextElementSibling;
const colorTwoHexCode = colorTwo.nextElementSibling;
const colorThreeHexCode = colorThree.nextElementSibling;
const colorFourHexCode = colorFour.nextElementSibling;
const colorFiveHexCode = colorFive.nextElementSibling;
// console.log(colorOneHexCode)


// ----------------------------------------------------------------------------
// CARD oNE
// ----------------------------------------------------------------------------
const cardOneBackground = document.querySelector(".card1.card .background");
const cardOneCircleOne = document.querySelector(".card1.card .circle1");
const cardOneCircleTwo = document.querySelector(".card1.card .circle2");
const cardOneCircleThree = document.querySelector(".card1.card .circle3");
const cardOneText = document.querySelector(".card1.card .text");
const cardOneButton = document.querySelector(".card1.card .button");
const cardOneButtonText = document.querySelector(".card1.card p");


// ----------------------------------------------------------------------------
// CARD TWO
// ----------------------------------------------------------------------------


const cardTwoBackground = document.querySelector(".card2.card .background");
const cardTwoCircleOne = document.querySelector(".card2.card .circle1");
const cardTwoCircleTwo = document.querySelector(".card2.card .circle2");
const cardTwoCircleThree = document.querySelector(".card2.card .circle3");
const cardTwoText = document.querySelector(".card2.card .text");
const cardTwoButton = document.querySelector(".card2.card .button");
const cardTwoButtonText = document.querySelector(".card2.card p");




inputHue.addEventListener("input", changeColor);
inputSaturation.addEventListener("input", changeColor);
inputBrightness.addEventListener("input", changeColor);

//COLOR ONE
colorOne.addEventListener("click", checkIsSelectedColor1); 

function checkIsSelectedColor1() {
    if (isSelectedColor1) {
        unSelectColorOne();
    } else if (!isSelectedColor1) {
        selectColorOne();
    }
}
function selectColorOne() {
    isSelectedColor1 = true
        colorOne.style.border = '3px solid hsl(238, 100%, 68%)';
        
        let inputColorOneHexCode = colorOneHexCode.textContent;
        let hslColor = hexToHsl(inputColorOneHexCode)
    
        inputHue.value = hslColor.h
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorOne() {
        isSelectedColor1 = false
        colorOne.style.border = 'none'; 
}

//COLOR TWO
colorTwo.addEventListener("click", checkIsSelectedColor2); 

function checkIsSelectedColor2() {
    if (isSelectedColor2) {
        unSelectColorTwo();
    } else if (!isSelectedColor2) {
        selectColorTwo();
    }
}
function selectColorTwo() {
    isSelectedColor2 = true
        colorTwo.style.border = '3px solid hsl(238, 100%, 68%)';

        let inputColorTwoHexCode = colorTwoHexCode.textContent;
        let hslColor = hexToHsl(inputColorTwoHexCode)
    
        inputHue.value = hslColor.h
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorTwo() {
        isSelectedColor2 = false
        colorTwo.style.border = 'none'; 
}

//COLOR THREE
colorThree.addEventListener("click", checkIsSelectedColor3); 

function checkIsSelectedColor3() {
    if (isSelectedColor3) {
        unSelectColorThree();
    } else if (!isSelectedColor3) {
        selectColorThree();
    }
}
function selectColorThree() {
    isSelectedColor3 = true
        colorThree.style.border = '3px solid hsl(238, 100%, 68%)';

        let inputColorThreeHexCode = colorThreeHexCode.textContent;
        let hslColor = hexToHsl(inputColorThreeHexCode)
    
        inputHue.value = hslColor.h
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorThree() {
        isSelectedColor3 = false
        colorThree.style.border = 'none'; 
}

//COLOR FOUR
colorFour.addEventListener("click", checkIsSelectedColor4); 

function checkIsSelectedColor4() {
    if (isSelectedColor4) {
        unSelectColorFour();
    } else if (!isSelectedColor4) {
        selectColorFour();
    }
}
function selectColorFour() {
    isSelectedColor4 = true
        colorFour.style.border = '3px solid hsl(238, 100%, 68%)';

        let inputColorFourHexCode = colorFourHexCode.textContent;
        let hslColor = hexToHsl(inputColorFourHexCode)
    
        inputHue.value = hslColor.h
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorFour() {
        isSelectedColor4 = false
        colorFour.style.border = 'none'; 
}

//COLOR FIVE
colorFive.addEventListener("click", checkIsSelectedColor5); 

function checkIsSelectedColor5() {
    if (isSelectedColor5) {
        unSelectColorFive();
    } else if (!isSelectedColor5) {
        selectColorFive();
    }
}
function selectColorFive() {
    isSelectedColor5 = true
        colorFive.style.border = '3px solid hsl(238, 100%, 68%)';

        let inputColorFiveHexCode = colorFiveHexCode.textContent;
        let hslColor = hexToHsl(inputColorFiveHexCode)
    
        inputHue.value = hslColor.h
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorFive() {
        isSelectedColor5 = false
        colorFive.style.border = 'none'; 
}




function changeColor() {
    let hueValue = parseInt(inputHue.value);
    let saturationValue = parseInt(inputSaturation.value);
    let brightnessValue = parseInt(inputBrightness.value);
    let hslColor = `hsl(${hueValue}, ${saturationValue}%, ${brightnessValue}%)`;
    // body.style.backgroundColor = hslColor;
    let hexColor = hslToHex(hueValue,saturationValue,brightnessValue)
    
    // console.log(hexColor)
    // console.log(changedColor);
    outputHueValue.textContent = hueValue;
    outputSaturationValue.textContent = saturationValue;
    outputBrightnessValue.textContent = brightnessValue;
    // console.log(inputHue.value, inputSaturation.value, inputBrightness.value)

      // colorOne.style.backgroundColor = hslColor;
    if (isSelectedColor1) {
        colorOne.style.backgroundColor = hslColor;
        colorOne.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor2) {
        colorTwo.style.backgroundColor = hslColor;
        colorTwo.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor3) {
        colorThree.style.backgroundColor = hslColor;
        colorThree.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor4) {
        colorFour.style.backgroundColor = hslColor;
        colorFour.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor5) {
        colorFive.style.backgroundColor = hslColor;
        colorFive.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 


  
  
}


outputHueValue.addEventListener("input", applyInputHueValue);


function applyInputHueValue(e) {
    let inputHueValue = outputHueValue.textContent;
    

    let rangeHueValue = inputHue.value;
    rangeHueValue = inputHueValue;
    inputHue.value = rangeHueValue;
    changeColor() 
    

    
}

outputSaturationValue.addEventListener("input", applyInputSaturationValue);

function applyInputSaturationValue() {
    let inputSaturationValue = outputSaturationValue.textContent;

    let rangeSaturationValue = inputSaturation.value;
    rangeSaturationValue = inputSaturationValue;
    inputSaturation.value = rangeSaturationValue;
    changeColor() 
    
}

outputBrightnessValue.addEventListener("input", applyInputBrightnessValue);

function applyInputBrightnessValue() {
    let inputBrightnessValue = outputBrightnessValue.textContent;

    let rangeBrightnessValue = inputBrightness.value;
    rangeBrightnessValue = inputBrightnessValue;
    inputBrightness.value = rangeBrightnessValue
    changeColor() 
    
}


// COLOR ONE
colorOneHexCode.addEventListener("input", applyInputColorOneHexCode);
function applyInputColorOneHexCode() {
    let inputColorOneHexCode = colorOneHexCode.textContent;
    colorOne.style.backgroundColor = inputColorOneHexCode;

    let hslColor = hexToHsl(inputColorOneHexCode)
    // console.log(hslColor)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l

    
}
// COLOR TWO
colorTwoHexCode.addEventListener("input", applyInputColorTwoHexCode);
function applyInputColorTwoHexCode() {
    let inputColorTwoHexCode = colorTwoHexCode.textContent;
    colorTwo.style.backgroundColor = inputColorTwoHexCode;

    let hslColor = hexToHsl(inputColorTwoHexCode)
    // console.log(hslColor)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l
    
    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}
// COLOR THREE
colorThreeHexCode.addEventListener("input", applyInputColorThreeHexCode);
function applyInputColorThreeHexCode() {
    let inputColorThreeHexCode = colorThreeHexCode.textContent;
    colorThree.style.backgroundColor = inputColorThreeHexCode;

    let hslColor = hexToHsl(inputColorThreeHexCode)
    // console.log(hslColor)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}
// COLOR FOUR
colorFourHexCode.addEventListener("input", applyInputColorFourHexCode);
function applyInputColorFourHexCode() {
    let inputColorFourHexCode = colorFourHexCode.textContent;
    colorFour.style.backgroundColor = inputColorFourHexCode;

    let hslColor = hexToHsl(inputColorFourHexCode)
   

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}
// COLOR FIVE
colorFiveHexCode.addEventListener("input", applyInputColorFiveHexCode);
function applyInputColorFiveHexCode() {
    let inputColorFiveHexCode = colorFiveHexCode.textContent;
    colorFive.style.backgroundColor = inputColorFiveHexCode;

    let hslColor = hexToHsl(inputColorFiveHexCode)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}



// CARD ONE
// BACKGROUND
cardOneBackground.addEventListener("click", checkIsSelectedCard1Background); 

function checkIsSelectedCard1Background() {
    if (isSelectedCard1Background) {
        unSelectCardOneBackground();
    } else if (!isSelectedCard1Background) {
        selectCardOneBackground();
    }
}
function selectCardOneBackground() {
    isSelectedCard1Background = true
        cardOneBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneBackgroundToColorOne); 
        colorTwo.addEventListener("click", changeCardOneBackgroundToColorTwo); 
        colorThree.addEventListener("click", changeCardOneBackgroundToColorThree); 
        colorFour.addEventListener("click", changeCardOneBackgroundToColorFour); 
        colorFive.addEventListener("click", changeCardOneBackgroundToColorFive); 
        
        
}
function unSelectCardOneBackground() {
    isSelectedCard1Background = false
    cardOneBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardOneBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardOneBackgroundToColorFive); 
}

function changeCardOneBackgroundToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorOneBgC;
}
function changeCardOneBackgroundToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorTwoBgC;
}
function changeCardOneBackgroundToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorThreeBgC;
}
function changeCardOneBackgroundToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorFourBgC;
}
function changeCardOneBackgroundToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorFiveBgC;
}

// CARD ONE
// CIRCLE ONE
cardOneCircleOne.addEventListener("click", checkIsSelectedCard1CircleOne); 

function checkIsSelectedCard1CircleOne() {
    if (isSelectedCard1Circle1) {
        unSelectCardOneCircleOne();
    } else if (!isSelectedCard1Circle1) {
        selectCardOneCircleOne();
    }
}
function selectCardOneCircleOne() {
    isSelectedCard1Circle1 = true
        cardOneCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardOneCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardOneCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardOneCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardOneCircleOneToColorFive); 
        
        
}
function unSelectCardOneCircleOne() {
    isSelectedCard1Circle1 = false
    cardOneCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardOneCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardOneCircleOneToColorFive); 
}

function changeCardOneCircleOneToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorOneBgC;
}
function changeCardOneCircleOneToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorTwoBgC;
}
function changeCardOneCircleOneToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorThreeBgC;
}
function changeCardOneCircleOneToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorFourBgC;
}
function changeCardOneCircleOneToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorFiveBgC;
}

// CARD ONE
// CIRCLE TWO
cardOneCircleTwo.addEventListener("click", checkIsSelectedCard1CircleTwo); 

function checkIsSelectedCard1CircleTwo() {
    if (isSelectedCard1Circle2) {
        unSelectCardOneCircleTwo();
    } else if (!isSelectedCard1Circle2) {
        selectCardOneCircleTwo();
    }
}
function selectCardOneCircleTwo() {
    isSelectedCard1Circle2 = true
        cardOneCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardOneCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardOneCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardOneCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardOneCircleTwoToColorFive); 
     
        
        
}
function unSelectCardOneCircleTwo() {
    isSelectedCard1Circle2 = false
    cardOneCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardOneCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardOneCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardOneCircleTwoToColorFive);  
}

function changeCardOneCircleTwoToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorOneBgC;
}
function changeCardOneCircleTwoToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorTwoBgC;
}
function changeCardOneCircleTwoToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorThreeBgC;
}
function changeCardOneCircleTwoToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorFourBgC;
}
function changeCardOneCircleTwoToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorFiveBgC;
}
// CARD ONE
// CIRCLE THREE
cardOneCircleThree.addEventListener("click", checkIsSelectedCard1CircleThree); 

function checkIsSelectedCard1CircleThree() {
    if (isSelectedCard1Circle3) {
        unSelectCardOneCircleThree();
    } else if (!isSelectedCard1Circle3) {
        selectCardOneCircleThree();
    }
}
function selectCardOneCircleThree() {
    isSelectedCard1Circle3 = true
        cardOneCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardOneCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardOneCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardOneCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardOneCircleThreeToColorFive); 
        
        
}
function unSelectCardOneCircleThree() {
    isSelectedCard1Circle3 = false
    cardOneCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardOneCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardOneCircleThreeToColorFive); 
}

function changeCardOneCircleThreeToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorOneBgC;
}
function changeCardOneCircleThreeToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorTwoBgC;
}
function changeCardOneCircleThreeToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorThreeBgC;
}
function changeCardOneCircleThreeToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorFourBgC;
}
function changeCardOneCircleThreeToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorFiveBgC;
}

// CARD ONE
// TEXT
cardOneText.addEventListener("click", checkIsSelectedCard1Text); 

function checkIsSelectedCard1Text() {
    if (isSelectedCard1Text) {
        unSelectCardOneText();
    } else if (!isSelectedCard1Text) {
        selectCardOneText();
    }
}
function selectCardOneText() {
    isSelectedCard1Text = true
        cardOneText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneTextToColorOne); 
        colorTwo.addEventListener("click", changeCardOneTextToColorTwo); 
        colorThree.addEventListener("click", changeCardOneTextToColorThree); 
        colorFour.addEventListener("click", changeCardOneTextToColorFour); 
        colorFive.addEventListener("click", changeCardOneTextToColorFive); 
        
        
}
function unSelectCardOneText() {
    isSelectedCard1Text = false
    cardOneText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneTextToColorThree); 
    colorFour.removeEventListener("click", changeCardOneTextToColorFour); 
    colorFive.removeEventListener("click", changeCardOneTextToColorFive); 
}

function changeCardOneTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneText.style.color = colorOneBgC;
}
function changeCardOneTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneText.style.color = colorTwoBgC;
}
function changeCardOneTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneText.style.color = colorThreeBgC;
}
function changeCardOneTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneText.style.color = colorFourBgC;
}
function changeCardOneTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneText.style.color = colorFiveBgC;
}
// CARD ONE
// BUTTON
cardOneButton.addEventListener("click", checkIsSelectedCard1Button); 

function checkIsSelectedCard1Button() {
    if (isSelectedCard1Button) {
        unSelectCardOneButton();
    } else if (!isSelectedCard1Button) {
        selectCardOneButton();
    }
}
function selectCardOneButton() {
    isSelectedCard1Button = true
    cardOneButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardOneButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardOneButtonToColorThree); 
        colorFour.addEventListener("click", changeCardOneButtonToColorFour); 
        colorFive.addEventListener("click", changeCardOneButtonToColorFive); 
        
        
}
function unSelectCardOneButton() {
    isSelectedCard1Button = false
    cardOneButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardOneButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardOneButtonToColorFive); 
}

function changeCardOneButtonToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneButton.style.backgroundColor = colorOneBgC;
}
function changeCardOneButtonToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneButton.style.backgroundColor = colorTwoBgC;
}
function changeCardOneButtonToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneButton.style.backgroundColor = colorThreeBgC;
}
function changeCardOneButtonToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneButton.style.backgroundColor = colorFourBgC;
}
function changeCardOneButtonToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneButton.style.backgroundColor = colorFiveBgC;
}
// CARD ONE
// BUTTON TEXT
cardOneButtonText.addEventListener("click", checkIsSelectedCard1ButtonText); 

function checkIsSelectedCard1ButtonText() {
    if (isSelectedCard1ButtonText) {
        unSelectCardOneButtonText();
    } else if (!isSelectedCard1ButtonText) {
        selectCardOneButtonText();
    }
}
function selectCardOneButtonText() {
    isSelectedCard1ButtonText = true
    cardOneButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardOneButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardOneButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardOneButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardOneButtonTextToColorFive); 
        
        
}
function unSelectCardOneButtonText() {
    isSelectedCard1ButtonText = false
    cardOneButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardOneButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardOneButtonTextToColorFive); 
}

function changeCardOneButtonTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneButtonText.style.color = colorOneBgC;
}
function changeCardOneButtonTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneButtonText.style.color = colorTwoBgC;
}
function changeCardOneButtonTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneButtonText.style.color = colorThreeBgC;
}
function changeCardOneButtonTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneButtonText.style.color = colorFourBgC;
}
function changeCardOneButtonTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneButtonText.style.color = colorFiveBgC;
}


// ----------------------------------------------------------------------------
// CARD TWO
// ----------------------------------------------------------------------------

// CARD TWO
// BACKGROUND
cardTwoBackground.addEventListener("click", checkIsSelectedCard2Background); 

function checkIsSelectedCard2Background() {
    if (isSelectedCard2Background) {
        unSelectCardTwoBackground();
    } else if (!isSelectedCard2Background) {
        selectCardTwoBackground();
    }
}
function selectCardTwoBackground() {
    isSelectedCard2Background = true
        cardTwoBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoBackgroundToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoBackgroundToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoBackgroundToColorThree); 
        colorFour.addEventListener("click", changeCardTwoBackgroundToColorFour); 
        colorFive.addEventListener("click", changeCardTwoBackgroundToColorFive); 
        
        
}
function unSelectCardTwoBackground() {
    isSelectedCard2Background = false
    cardTwoBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoBackgroundToColorFive); 
}

function changeCardTwoBackgroundToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorOneBgC;
}
function changeCardTwoBackgroundToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorTwoBgC;
}
function changeCardTwoBackgroundToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorThreeBgC;
}
function changeCardTwoBackgroundToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorFourBgC;
}
function changeCardTwoBackgroundToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorFiveBgC;
}


// CARD TWO
// CIRCLE ONE
cardTwoCircleOne.addEventListener("click", checkIsSelectedCard2CircleOne); 

function checkIsSelectedCard2CircleOne() {
    if (isSelectedCard2Circle1) {
        unSelectCardTwoCircleOne();
    } else if (!isSelectedCard2Circle1) {
        selectCardTwoCircleOne();
    }
}
function selectCardTwoCircleOne() {
    isSelectedCard2Circle1 = true
        cardTwoCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardTwoCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardTwoCircleOneToColorFive); 
        
        
}
function unSelectCardTwoCircleOne() {
    isSelectedCard2Circle1 = false
    cardTwoCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoCircleOneToColorFive); 
}

function changeCardTwoCircleOneToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorOneBgC;
}
function changeCardTwoCircleOneToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorTwoBgC;
}
function changeCardTwoCircleOneToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorThreeBgC;
}
function changeCardTwoCircleOneToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorFourBgC;
}
function changeCardTwoCircleOneToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorFiveBgC;
}

// CARD TWO
// CIRCLE TWO
cardTwoCircleTwo.addEventListener("click", checkIsSelectedCard2CircleTwo); 

function checkIsSelectedCard2CircleTwo() {
    if (isSelectedCard2Circle2) {
        unSelectCardTwoCircleTwo();
    } else if (!isSelectedCard2Circle2) {
        selectCardTwoCircleTwo();
    }
}
function selectCardTwoCircleTwo() {
    isSelectedCard2Circle2 = true
        cardTwoCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardTwoCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardTwoCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardTwoCircleTwoToColorFive); 
     
        
        
}
function unSelectCardTwoCircleTwo() {
    isSelectedCard2Circle2 = false
    cardTwoCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardTwoCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoCircleTwoToColorFive);  
}

function changeCardTwoCircleTwoToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorOneBgC;
}
function changeCardTwoCircleTwoToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorTwoBgC;
}
function changeCardTwoCircleTwoToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorThreeBgC;
}
function changeCardTwoCircleTwoToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorFourBgC;
}
function changeCardTwoCircleTwoToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorFiveBgC;
}

// CARD TWO
// CIRCLE THREE
cardTwoCircleThree.addEventListener("click", checkIsSelectedCard2CircleThree); 

function checkIsSelectedCard2CircleThree() {
    if (isSelectedCard2Circle3) {
        unSelectCardTwoCircleThree();
    } else if (!isSelectedCard2Circle3) {
        selectCardTwoCircleThree();
    }
}
function selectCardTwoCircleThree() {
    isSelectedCard2Circle3 = true
        cardTwoCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardTwoCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardTwoCircleThreeToColorFive); 
        
        
}
function unSelectCardTwoCircleThree() {
    isSelectedCard2Circle3 = false
    cardTwoCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoCircleThreeToColorFive); 
}

function changeCardTwoCircleThreeToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorOneBgC;
}
function changeCardTwoCircleThreeToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorTwoBgC;
}
function changeCardTwoCircleThreeToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorThreeBgC;
}
function changeCardTwoCircleThreeToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorFourBgC;
}
function changeCardTwoCircleThreeToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorFiveBgC;
}

// CARD TWO
// TEXT
cardTwoText.addEventListener("click", checkIsSelectedCard2Text); 

function checkIsSelectedCard2Text() {
    if (isSelectedCard2Text) {
        unSelectCardTwoText();
    } else if (!isSelectedCard2Text) {
        selectCardTwoText();
    }
}
function selectCardTwoText() {
    isSelectedCard2Text = true
        cardTwoText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoTextToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoTextToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoTextToColorThree); 
        colorFour.addEventListener("click", changeCardTwoTextToColorFour); 
        colorFive.addEventListener("click", changeCardTwoTextToColorFive); 
        
        
}
function unSelectCardTwoText() {
    isSelectedCard2Text = false
    cardTwoText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoTextToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoTextToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoTextToColorFive); 
}

function changeCardTwoTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoText.style.color = colorOneBgC;
}
function changeCardTwoTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoText.style.color = colorTwoBgC;
}
function changeCardTwoTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoText.style.color = colorThreeBgC;
}
function changeCardTwoTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoText.style.color = colorFourBgC;
}
function changeCardTwoTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoText.style.color = colorFiveBgC;
}

// CARD TWO
// BUTTON
cardTwoButton.addEventListener("click", checkIsSelectedCard2Button); 

function checkIsSelectedCard2Button() {
    if (isSelectedCard2Button) {
        unSelectCardTwoButton();
    } else if (!isSelectedCard2Button) {
        selectCardTwoButton();
    }
}
function selectCardTwoButton() {
    isSelectedCard2Button = true
    cardTwoButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoButtonToColorThree); 
        colorFour.addEventListener("click", changeCardTwoButtonToColorFour); 
        colorFive.addEventListener("click", changeCardTwoButtonToColorFive); 
        
        
}
function unSelectCardTwoButton() {
    isSelectedCard2Button = false
    cardTwoButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoButtonToColorFive); 
}

function changeCardTwoButtonToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorOneBgC;
}
function changeCardTwoButtonToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorTwoBgC;
}
function changeCardTwoButtonToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorThreeBgC;
}
function changeCardTwoButtonToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorFourBgC;
}
function changeCardTwoButtonToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorFiveBgC;
}



// CARD TWO
// BUTTON TEXT
cardTwoButtonText.addEventListener("click", checkIsSelectedCard2ButtonText); 

function checkIsSelectedCard2ButtonText() {
    if (isSelectedCard2ButtonText) {
        unSelectCardTwoButtonText();
    } else if (!isSelectedCard2ButtonText) {
        selectCardTwoButtonText();
    }
}
function selectCardTwoButtonText() {
    isSelectedCard2ButtonText = true
    cardTwoButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardTwoButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardTwoButtonTextToColorFive); 
        
        
}
function unSelectCardTwoButtonText() {
    isSelectedCard2ButtonText = false
    cardTwoButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoButtonTextToColorFive); 
}

function changeCardTwoButtonTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoButtonText.style.color = colorOneBgC;
}
function changeCardTwoButtonTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoButtonText.style.color = colorTwoBgC;
}
function changeCardTwoButtonTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoButtonText.style.color = colorThreeBgC;
}
function changeCardTwoButtonTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoButtonText.style.color = colorFourBgC;
}
function changeCardTwoButtonTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoButtonText.style.color = colorFiveBgC;
}





// COLOR CONVERTINGS
// Big thanks to https://css-tricks.com/converting-color-spaces-in-javascript/ for converting formulas below
// Changed returned value of hexToHsl function from string to object of some infos about values

// HSL TO HEX
function hslToHex(h,s,l) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }


  // HEX TO HSL
  function hexToHsl(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return {hslCode:"hsl(" + parseInt(h) + "," + parseInt(s) + "%," + parseInt(l) + "%)", h:parseInt(h), s:parseInt(s), l:parseInt(l)};
  }