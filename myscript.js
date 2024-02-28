// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === "CE") {
        // clear everything on display
        display.value = '';
    } else if (clickedButtonValue === "C") {
        // clear everything on display
        display.value = '';
    } else if (clickedButtonValue === "clear") {
        // clear last value on display
        display.value = display.value.slice(0, -1);
    } else if (clickedButtonValue === "sqr") {
        //square on display
        display.value = display.value * display.value;

    } else if (clickedButtonValue === "%") {
        //percent on display
        display.value = display.value / 100;
    } else if (clickedButtonValue === "obx") {
        display.value = 1 / display.value;
    } else if (clickedButtonValue === "sqrt") {
        //squareroot on display
        display.value = Math.sqrt(display.value);
    } else {
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
    }
}