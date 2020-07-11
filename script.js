// COLORS
let isSelectedColor1 = false;
let isSelectedColor2 = false;
let isSelectedColor3 = false;
let isSelectedColor4 = false;
let isSelectedColor5 = false;


// CARD ONE
let isSelectedCard1Background = false;
let isSelectedCard1Circle1 = false;
let isSelectedCard1Circle2 = false;
let isSelectedCard1Circle3 = false;
let isSelectedCard1Text = false;
let isSelectedCard1Button = false;
let isSelectedCard1ButtonText = false;

// CARD TWO
let isSelectedCard2Background = false;
let isSelectedCard2Circle1 = false;
let isSelectedCard2Circle2 = false;
let isSelectedCard2Circle3 = false;
let isSelectedCard2Text = false;
let isSelectedCard2Button = false;
let isSelectedCard2ButtonText = false;

// CARD THREE
let isSelectedCard3Background = false;
let isSelectedCard3Circle1 = false;
let isSelectedCard3Circle2 = false;
let isSelectedCard3Circle3 = false;
let isSelectedCard3Text = false;
let isSelectedCard3Button = false;
let isSelectedCard3ButtonText = false;

// CARD FOUR
let isSelectedCard4Background = false;
let isSelectedCard4Circle1 = false;
let isSelectedCard4Circle2 = false;
let isSelectedCard4Circle3 = false;
let isSelectedCard4Text = false;
let isSelectedCard4Button = false;
let isSelectedCard4ButtonText = false;


// HSL OUTPUTS
const outputHueValue = document.querySelector(".output .hueValue");
const outputSaturationValue = document.querySelector(".output .saturationValue");
const outputBrightnessValue = document.querySelector(".output .brightnessValue");

// HSL RANGE INPUTS
const inputHue = document.querySelector("#hue");
const inputSaturation = document.querySelector("#saturation");
const inputBrightness = document.querySelector("#brightness");
// console.log(outputHueValue, outputSaturationValue, outputBrightnessValue)
// console.log(inputHue.value, inputSaturation.value, inputBrightness.value)

// PALETTE
const lockIcon = document.querySelector(".palette__container img");

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


// CARD ONE
const cardOneBackground = document.querySelector(".card1.card .background");
const cardOneCircleOne = document.querySelector(".card1.card .circle1");
const cardOneCircleTwo = document.querySelector(".card1.card .circle2");
const cardOneCircleThree = document.querySelector(".card1.card .circle3");
const cardOneText = document.querySelector(".card1.card .text");
const cardOneButton = document.querySelector(".card1.card .button");
const cardOneButtonText = document.querySelector(".card1.card p");


// CARD TWO
const cardTwoBackground = document.querySelector(".card2.card .background");
const cardTwoCircleOne = document.querySelector(".card2.card .circle1");
const cardTwoCircleTwo = document.querySelector(".card2.card .circle2");
const cardTwoCircleThree = document.querySelector(".card2.card .circle3");
const cardTwoText = document.querySelector(".card2.card .text");
const cardTwoButton = document.querySelector(".card2.card .button");
const cardTwoButtonText = document.querySelector(".card2.card p");

// CARD THREE
const cardThreeBackground = document.querySelector(".card3.card .background");
const cardThreeCircleOne = document.querySelector(".card3.card .circle1");
const cardThreeCircleTwo = document.querySelector(".card3.card .circle2");
const cardThreeCircleThree = document.querySelector(".card3.card .circle3");
const cardThreeText = document.querySelector(".card3.card .text");
const cardThreeButton = document.querySelector(".card3.card .button");
const cardThreeButtonText = document.querySelector(".card3.card p");


// CARD FOUR
const cardFourBackground = document.querySelector(".card4.card .background");
const cardFourCircleOne = document.querySelector(".card4.card .circle1");
const cardFourCircleTwo = document.querySelector(".card4.card .circle2");
const cardFourCircleThree = document.querySelector(".card4.card .circle3");
const cardFourText = document.querySelector(".card4.card .text");
const cardFourButton = document.querySelector(".card4.card .button");
const cardFourButtonText = document.querySelector(".card4.card p");




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



// CHANGE COLOR
function changeColor() {
    let hueValue = parseInt(inputHue.value);
    let saturationValue = parseInt(inputSaturation.value);
    let brightnessValue = parseInt(inputBrightness.value);
    let hslColor = `hsl(${hueValue}, ${saturationValue}%, ${brightnessValue}%)`;
    // body.style.backgroundColor = hslColor;
    let hexColor = hslToHex(hueValue,saturationValue,brightnessValue)

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hueValue}, 100%, 50%))`;
    // if(hueValue > 0 && hueValue < 45) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, red)`;
    // }
    // if(hueValue >= 45 && hueValue < 90) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, orange)`;
    // }
    // if(hueValue >= 90 && hueValue < 135) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, yellow)`;
    // }
    // if(hueValue >= 135 && hueValue < 180) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, rgb(0, 255, 0))`;
    // }
    // if(hueValue >= 180 && hueValue < 225) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, cyan)`;
    // }
    // if(hueValue >= 225 && hueValue < 270) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, blue)`;
    // }
    // if(hueValue >= 270 && hueValue < 300) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, rgb(255, 0, 255))`;
    // }
    // if(hueValue >= 300 && hueValue < 360) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, red)`;
    // }

    
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

// APPLY GIVEN HSL INPUT VALUES
// HUE
outputHueValue.addEventListener("input", applyInputHueValue);

function applyInputHueValue(e) {
    let inputHueValue = outputHueValue.textContent;
    
    let rangeHueValue = inputHue.value;
    rangeHueValue = inputHueValue;
    inputHue.value = rangeHueValue;
    changeColor() 
        
}

// SATURATION
outputSaturationValue.addEventListener("input", applyInputSaturationValue);

function applyInputSaturationValue() {
    let inputSaturationValue = outputSaturationValue.textContent;

    let rangeSaturationValue = inputSaturation.value;
    rangeSaturationValue = inputSaturationValue;
    inputSaturation.value = rangeSaturationValue;
    changeColor() 
    
}

// BRIGHTNESS
outputBrightnessValue.addEventListener("input", applyInputBrightnessValue);

function applyInputBrightnessValue() {
    let inputBrightnessValue = outputBrightnessValue.textContent;

    let rangeBrightnessValue = inputBrightness.value;
    rangeBrightnessValue = inputBrightnessValue;
    inputBrightness.value = rangeBrightnessValue
    changeColor() 
    
}

// CHANGE COLOR BY APPLYING GIVEN HEX CODE
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

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

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
    
    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

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

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

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

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;    

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

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}


// ----------------------------------------------------------------------------
// CARD ONE
// ----------------------------------------------------------------------------

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


// ----------------------------------------------------------------------------
// CARD THREE
// ----------------------------------------------------------------------------

// CARD THREE
// BACKGROUND
cardThreeBackground.addEventListener("click", checkIsSelectedCard3Background); 

function checkIsSelectedCard3Background() {
    if (isSelectedCard3Background) {
        unSelectCardThreeBackground();
    } else if (!isSelectedCard3Background) {
        selectCardThreeBackground();
    }
}
function selectCardThreeBackground() {
    isSelectedCard3Background = true
        cardThreeBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeBackgroundToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeBackgroundToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeBackgroundToColorThree); 
        colorFour.addEventListener("click", changeCardThreeBackgroundToColorFour); 
        colorFive.addEventListener("click", changeCardThreeBackgroundToColorFive); 
        
        
}
function unSelectCardThreeBackground() {
    isSelectedCard3Background = false
    cardThreeBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeBackgroundToColorFive); 
}

function changeCardThreeBackgroundToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorOneBgC;
}
function changeCardThreeBackgroundToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorTwoBgC;
}
function changeCardThreeBackgroundToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorThreeBgC;
}
function changeCardThreeBackgroundToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorFourBgC;
}
function changeCardThreeBackgroundToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorFiveBgC;
}


// CARD THREE
// CIRCLE ONE
cardThreeCircleOne.addEventListener("click", checkIsSelectedCard3CircleOne); 

function checkIsSelectedCard3CircleOne() {
    if (isSelectedCard3Circle1) {
        unSelectCardThreeCircleOne();
    } else if (!isSelectedCard3Circle1) {
        selectCardThreeCircleOne();
    }
}
function selectCardThreeCircleOne() {
    isSelectedCard3Circle1 = true
        cardThreeCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardThreeCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardThreeCircleOneToColorFive); 
        
        
}
function unSelectCardThreeCircleOne() {
    isSelectedCard3Circle1 = false
    cardThreeCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeCircleOneToColorFive); 
}

function changeCardThreeCircleOneToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorOneBgC;
}
function changeCardThreeCircleOneToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorTwoBgC;
}
function changeCardThreeCircleOneToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorThreeBgC;
}
function changeCardThreeCircleOneToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorFourBgC;
}
function changeCardThreeCircleOneToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorFiveBgC;
}

// CARD THREE
// CIRCLE TWO
cardThreeCircleTwo.addEventListener("click", checkIsSelectedCard3CircleTwo); 

function checkIsSelectedCard3CircleTwo() {
    if (isSelectedCard3Circle2) {
        unSelectCardThreeCircleTwo();
    } else if (!isSelectedCard3Circle2) {
        selectCardThreeCircleTwo();
    }
}
function selectCardThreeCircleTwo() {
    isSelectedCard3Circle2 = true
        cardThreeCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardThreeCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardThreeCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardThreeCircleTwoToColorFive); 
     
        
        
}
function unSelectCardThreeCircleTwo() {
    isSelectedCard3Circle2 = false
    cardThreeCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardThreeCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeCircleTwoToColorFive);  
}

function changeCardThreeCircleTwoToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorOneBgC;
}
function changeCardThreeCircleTwoToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorTwoBgC;
}
function changeCardThreeCircleTwoToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorThreeBgC;
}
function changeCardThreeCircleTwoToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorFourBgC;
}
function changeCardThreeCircleTwoToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorFiveBgC;
}

// CARD THREE
// CIRCLE THREE
cardThreeCircleThree.addEventListener("click", checkIsSelectedCard3CircleThree); 

function checkIsSelectedCard3CircleThree() {
    if (isSelectedCard3Circle3) {
        unSelectCardThreeCircleThree();
    } else if (!isSelectedCard3Circle3) {
        selectCardThreeCircleThree();
    }
}
function selectCardThreeCircleThree() {
    isSelectedCard3Circle3 = true
        cardThreeCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardThreeCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardThreeCircleThreeToColorFive); 
        
        
}
function unSelectCardThreeCircleThree() {
    isSelectedCard3Circle3 = false
    cardThreeCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeCircleThreeToColorFive); 
}

function changeCardThreeCircleThreeToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorOneBgC;
}
function changeCardThreeCircleThreeToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorTwoBgC;
}
function changeCardThreeCircleThreeToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorThreeBgC;
}
function changeCardThreeCircleThreeToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorFourBgC;
}
function changeCardThreeCircleThreeToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorFiveBgC;
}

// CARD THREE
// TEXT
cardThreeText.addEventListener("click", checkIsSelectedCard3Text); 

function checkIsSelectedCard3Text() {
    if (isSelectedCard3Text) {
        unSelectCardThreeText();
    } else if (!isSelectedCard3Text) {
        selectCardThreeText();
    }
}
function selectCardThreeText() {
    isSelectedCard3Text = true
        cardThreeText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeTextToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeTextToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeTextToColorThree); 
        colorFour.addEventListener("click", changeCardThreeTextToColorFour); 
        colorFive.addEventListener("click", changeCardThreeTextToColorFive); 
        
        
}
function unSelectCardThreeText() {
    isSelectedCard3Text = false
    cardThreeText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeTextToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeTextToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeTextToColorFive); 
}

function changeCardThreeTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeText.style.color = colorOneBgC;
}
function changeCardThreeTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeText.style.color = colorTwoBgC;
}
function changeCardThreeTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeText.style.color = colorThreeBgC;
}
function changeCardThreeTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeText.style.color = colorFourBgC;
}
function changeCardThreeTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeText.style.color = colorFiveBgC;
}

// CARD THREE
// BUTTON
cardThreeButton.addEventListener("click", checkIsSelectedCard3Button); 

function checkIsSelectedCard3Button() {
    if (isSelectedCard3Button) {
        unSelectCardThreeButton();
    } else if (!isSelectedCard3Button) {
        selectCardThreeButton();
    }
}
function selectCardThreeButton() {
    isSelectedCard3Button = true
    cardThreeButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeButtonToColorThree); 
        colorFour.addEventListener("click", changeCardThreeButtonToColorFour); 
        colorFive.addEventListener("click", changeCardThreeButtonToColorFive); 
        
        
}
function unSelectCardThreeButton() {
    isSelectedCard3Button = false
    cardThreeButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeButtonToColorFive); 
}

function changeCardThreeButtonToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorOneBgC;
}
function changeCardThreeButtonToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorTwoBgC;
}
function changeCardThreeButtonToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorThreeBgC;
}
function changeCardThreeButtonToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorFourBgC;
}
function changeCardThreeButtonToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorFiveBgC;
}



// CARD THREE
// BUTTON TEXT
cardThreeButtonText.addEventListener("click", checkIsSelectedCard3ButtonText); 

function checkIsSelectedCard3ButtonText() {
    if (isSelectedCard3ButtonText) {
        unSelectCardThreeButtonText();
    } else if (!isSelectedCard3ButtonText) {
        selectCardThreeButtonText();
    }
}
function selectCardThreeButtonText() {
    isSelectedCard3ButtonText = true
    cardThreeButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardThreeButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardThreeButtonTextToColorFive); 
        
        
}
function unSelectCardThreeButtonText() {
    isSelectedCard3ButtonText = false
    cardThreeButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeButtonTextToColorFive); 
}

function changeCardThreeButtonTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeButtonText.style.color = colorOneBgC;
}
function changeCardThreeButtonTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeButtonText.style.color = colorTwoBgC;
}
function changeCardThreeButtonTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeButtonText.style.color = colorThreeBgC;
}
function changeCardThreeButtonTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeButtonText.style.color = colorFourBgC;
}
function changeCardThreeButtonTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeButtonText.style.color = colorFiveBgC;
}




// ----------------------------------------------------------------------------
// CARD FOUR
// ----------------------------------------------------------------------------

// CARD FOUR
// BACKGROUND
cardFourBackground.addEventListener("click", checkIsSelectedCard4Background); 

function checkIsSelectedCard4Background() {
    if (isSelectedCard4Background) {
        unSelectCardFourBackground();
    } else if (!isSelectedCard4Background) {
        selectCardFourBackground();
    }
}
function selectCardFourBackground() {
    isSelectedCard4Background = true
        cardFourBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourBackgroundToColorOne); 
        colorTwo.addEventListener("click", changeCardFourBackgroundToColorTwo); 
        colorThree.addEventListener("click", changeCardFourBackgroundToColorThree); 
        colorFour.addEventListener("click", changeCardFourBackgroundToColorFour); 
        colorFive.addEventListener("click", changeCardFourBackgroundToColorFive); 
        
        
}
function unSelectCardFourBackground() {
    isSelectedCard4Background = false
    cardFourBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardFourBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardFourBackgroundToColorFive); 
}

function changeCardFourBackgroundToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorOneBgC;
}
function changeCardFourBackgroundToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorTwoBgC;
}
function changeCardFourBackgroundToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorThreeBgC;
}
function changeCardFourBackgroundToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorFourBgC;
}
function changeCardFourBackgroundToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorFiveBgC;
}


// CARD FOUR
// CIRCLE ONE
cardFourCircleOne.addEventListener("click", checkIsSelectedCard4CircleOne); 

function checkIsSelectedCard4CircleOne() {
    if (isSelectedCard4Circle1) {
        unSelectCardFourCircleOne();
    } else if (!isSelectedCard4Circle1) {
        selectCardFourCircleOne();
    }
}
function selectCardFourCircleOne() {
    isSelectedCard4Circle1 = true
        cardFourCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardFourCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardFourCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardFourCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardFourCircleOneToColorFive); 
        
        
}
function unSelectCardFourCircleOne() {
    isSelectedCard4Circle1 = false
    cardFourCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardFourCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardFourCircleOneToColorFive); 
}

function changeCardFourCircleOneToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorOneBgC;
}
function changeCardFourCircleOneToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorTwoBgC;
}
function changeCardFourCircleOneToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorThreeBgC;
}
function changeCardFourCircleOneToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorFourBgC;
}
function changeCardFourCircleOneToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorFiveBgC;
}

// CARD FOUR
// CIRCLE TWO
cardFourCircleTwo.addEventListener("click", checkIsSelectedCard4CircleTwo); 

function checkIsSelectedCard4CircleTwo() {
    if (isSelectedCard4Circle2) {
        unSelectCardFourCircleTwo();
    } else if (!isSelectedCard4Circle2) {
        selectCardFourCircleTwo();
    }
}
function selectCardFourCircleTwo() {
    isSelectedCard4Circle2 = true
        cardFourCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardFourCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardFourCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardFourCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardFourCircleTwoToColorFive); 
     
        
    4
}
function unSelectCardFourCircleTwo() {
    isSelectedCard4Circle2 = false
    cardFourCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardFourCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardFourCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardFourCircleTwoToColorFive);  
}

function changeCardFourCircleTwoToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorOneBgC;
}
function changeCardFourCircleTwoToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorTwoBgC;
}
function changeCardFourCircleTwoToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorThreeBgC;
}
function changeCardFourCircleTwoToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorFourBgC;
}
function changeCardFourCircleTwoToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorFiveBgC;
}

// CARD FOUR
// CIRCLE THREE
cardFourCircleThree.addEventListener("click", checkIsSelectedCard4CircleThree); 

function checkIsSelectedCard4CircleThree() {
    if (isSelectedCard4Circle3) {
        unSelectCardFourCircleThree();
    } else if (!isSelectedCard4Circle3) {
        selectCardFourCircleThree();
    }
}
function selectCardFourCircleThree() {
    isSelectedCard4Circle3 = true
        cardFourCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardFourCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardFourCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardFourCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardFourCircleThreeToColorFive); 
        
        
}
function unSelectCardFourCircleThree() {
    isSelectedCard4Circle3 = false
    cardFourCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardFourCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardFourCircleThreeToColorFive); 
}

function changeCardFourCircleThreeToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorOneBgC;
}
function changeCardFourCircleThreeToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorTwoBgC;
}
function changeCardFourCircleThreeToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorThreeBgC;
}
function changeCardFourCircleThreeToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorFourBgC;
}
function changeCardFourCircleThreeToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorFiveBgC;
}

// CARD FOUR
// TEXT
cardFourText.addEventListener("click", checkIsSelectedCard4Text); 

function checkIsSelectedCard4Text() {
    if (isSelectedCard4Text) {
        unSelectCardFourText();
    } else if (!isSelectedCard4Text) {
        selectCardFourText();
    }
}
function selectCardFourText() {
    isSelectedCard4Text = true
        cardFourText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourTextToColorOne); 
        colorTwo.addEventListener("click", changeCardFourTextToColorTwo); 
        colorThree.addEventListener("click", changeCardFourTextToColorThree); 
        colorFour.addEventListener("click", changeCardFourTextToColorFour); 
        colorFive.addEventListener("click", changeCardFourTextToColorFive); 
        
        
}
function unSelectCardFourText() {
    isSelectedCard4Text = false
    cardFourText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourTextToColorThree); 
    colorFour.removeEventListener("click", changeCardFourTextToColorFour); 
    colorFive.removeEventListener("click", changeCardFourTextToColorFive); 
}

function changeCardFourTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourText.style.color = colorOneBgC;
}
function changeCardFourTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourText.style.color = colorTwoBgC;
}
function changeCardFourTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourText.style.color = colorThreeBgC;
}
function changeCardFourTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourText.style.color = colorFourBgC;
}
function changeCardFourTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourText.style.color = colorFiveBgC;
}

// CARD FOUR
// BUTTON
cardFourButton.addEventListener("click", checkIsSelectedCard4Button); 

function checkIsSelectedCard4Button() {
    if (isSelectedCard4Button) {
        unSelectCardFourButton();
    } else if (!isSelectedCard4Button) {
        selectCardFourButton();
    }
}
function selectCardFourButton() {
    isSelectedCard4Button = true
    cardFourButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardFourButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardFourButtonToColorThree); 
        colorFour.addEventListener("click", changeCardFourButtonToColorFour); 
        colorFive.addEventListener("click", changeCardFourButtonToColorFive); 
        
        
}
function unSelectCardFourButton() {
    isSelectedCard4Button = false
    cardFourButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardFourButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardFourButtonToColorFive); 
}

function changeCardFourButtonToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourButton.style.backgroundColor = colorOneBgC;
}
function changeCardFourButtonToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourButton.style.backgroundColor = colorTwoBgC;
}
function changeCardFourButtonToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourButton.style.backgroundColor = colorThreeBgC;
}
function changeCardFourButtonToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourButton.style.backgroundColor = colorFourBgC;
}
function changeCardFourButtonToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourButton.style.backgroundColor = colorFiveBgC;
}



// CARD FOUR
// BUTTON TEXT
cardFourButtonText.addEventListener("click", checkIsSelectedCard4ButtonText); 

function checkIsSelectedCard4ButtonText() {
    if (isSelectedCard4ButtonText) {
        unSelectCardFourButtonText();
    } else if (!isSelectedCard4ButtonText) {
        selectCardFourButtonText();
    }
}
function selectCardFourButtonText() {
    isSelectedCard4ButtonText = true
    cardFourButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardFourButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardFourButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardFourButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardFourButtonTextToColorFive); 
        
        
}
function unSelectCardFourButtonText() {
    isSelectedCard4ButtonText = false
    cardFourButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardFourButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardFourButtonTextToColorFive); 
}

function changeCardFourButtonTextToColorOne() {
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourButtonText.style.color = colorOneBgC;
}
function changeCardFourButtonTextToColorTwo() {
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourButtonText.style.color = colorTwoBgC;
}
function changeCardFourButtonTextToColorThree() {
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourButtonText.style.color = colorThreeBgC;
}
function changeCardFourButtonTextToColorFour() {
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourButtonText.style.color = colorFourBgC;
}
function changeCardFourButtonTextToColorFive() {
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourButtonText.style.color = colorFiveBgC;
}




// HANDLE MOVE AND COLOR PICKER SELECTION 
const selectionIndicator = document.querySelector('.indicator')
const moveTool = document.querySelector('.move-tool')
const colorPicker = document.querySelector('.color-picker')


moveTool.addEventListener('click', selectMoveTool)
colorPicker.addEventListener('click', selectColorPicker)
function selectMoveTool() {
    selectionIndicator.classList.remove('moveDown');
    selectionIndicator.classList.toggle('moveUp');

    lockIcon.style.opacity = ".3"
    lockIcon.title = "lock palette"
    isColorsLocked = false

        
    colorOne.addEventListener("click", checkIsSelectedColor1); 
    colorTwo.addEventListener("click", checkIsSelectedColor2); 
    colorThree.addEventListener("click", checkIsSelectedColor3); 
    colorFour.addEventListener("click", checkIsSelectedColor4); 
    colorFive.addEventListener("click", checkIsSelectedColor5);

    colorOneHexCode.contentEditable = true
    colorTwoHexCode.contentEditable = true
    colorThreeHexCode.contentEditable = true
    colorFourHexCode.contentEditable = true
    colorFiveHexCode.contentEditable = true
}
function selectColorPicker() {
    selectionIndicator.classList.remove('moveUp');
    selectionIndicator.classList.add('moveDown');
    
 
    isColorsLocked = true;
    lockIcon.style.opacity = "1"
   lockIcon.title = "unlock palette"

   colorOne.removeEventListener("click", checkIsSelectedColor1); 
   colorTwo.removeEventListener("click", checkIsSelectedColor2); 
   colorThree.removeEventListener("click", checkIsSelectedColor3); 
   colorFour.removeEventListener("click", checkIsSelectedColor4); 
   colorFive.removeEventListener("click", checkIsSelectedColor5); 

   unSelectColorOne()
   unSelectColorTwo()
   unSelectColorThree()
   unSelectColorFour()
   unSelectColorFive()


   colorOneHexCode.contentEditable = false
   colorTwoHexCode.contentEditable = false
   colorThreeHexCode.contentEditable = false
   colorFourHexCode.contentEditable = false
   colorFiveHexCode.contentEditable = false
}


// PALETTE LOCKING
let isColorsLocked = false

lockIcon.addEventListener('click', checkIsColorsLocked)


function checkIsColorsLocked() {
    if (isColorsLocked) {
        unLockColors();
    } else if (!isColorsLocked) {
        lockColors();
    }
}


function lockColors() {
   lockIcon.style.opacity = "1"
   lockIcon.title = "unlock palette"

   isColorsLocked = true;
   colorOne.removeEventListener("click", checkIsSelectedColor1); 
   colorTwo.removeEventListener("click", checkIsSelectedColor2); 
   colorThree.removeEventListener("click", checkIsSelectedColor3); 
   colorFour.removeEventListener("click", checkIsSelectedColor4); 
   colorFive.removeEventListener("click", checkIsSelectedColor5); 


   unSelectColorOne()
   unSelectColorTwo()
   unSelectColorThree()
   unSelectColorFour()
   unSelectColorFive()

//    colorOneHexCode.removeEventListener("input", applyInputColorOneHexCode);
//    colorTwoHexCode.removeEventListener("input", applyInputColorTwoHexCode);
//    colorThreeHexCode.removeEventListener("input", applyInputColorThreeHexCode);
//    colorFourHexCode.removeEventListener("input", applyInputColorFourHexCode);
//    colorFiveHexCode.removeEventListener("input", applyInputColorFiveHexCode);

   colorOneHexCode.contentEditable = false
   colorTwoHexCode.contentEditable = false
   colorThreeHexCode.contentEditable = false
   colorFourHexCode.contentEditable = false
   colorFiveHexCode.contentEditable = false

}
function unLockColors() {

    selectMoveTool()
    lockIcon.style.opacity = ".3"
    lockIcon.title = "lock palette"
    isColorsLocked = false

        
    colorOne.addEventListener("click", checkIsSelectedColor1); 
    colorTwo.addEventListener("click", checkIsSelectedColor2); 
    colorThree.addEventListener("click", checkIsSelectedColor3); 
    colorFour.addEventListener("click", checkIsSelectedColor4); 
    colorFive.addEventListener("click", checkIsSelectedColor5);


    // colorOneHexCode.addEventListener("input", applyInputColorOneHexCode);
    // colorTwoHexCode.addEventListener("input", applyInputColorTwoHexCode);
    // colorThreeHexCode.addEventListener("input", applyInputColorThreeHexCode);
    // colorFourHexCode.addEventListener("input", applyInputColorFourHexCode);
    // colorFiveHexCode.addEventListener("input", applyInputColorFiveHexCode);


    colorOneHexCode.contentEditable = true
    colorTwoHexCode.contentEditable = true
    colorThreeHexCode.contentEditable = true
    colorFourHexCode.contentEditable = true
    colorFiveHexCode.contentEditable = true
}




// COLOR CONVERTINGS
// Big thanks to https://css-tricks.com/converting-color-spaces-in-javascript/ for converting formulas below
// Changed returned value of hexToHsl() function from a string to an object of some infos about values

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