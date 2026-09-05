let display = document.getElementById("display");

function addNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function chooseOperator(operator) {
    let lastCharacter = display.value.slice(-1);

    if ("+-*/%".includes(lastCharacter)) {
        display.value = display.value.slice(0, -1);
    }

    display.value += operator;
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}


// Keyboard Support
document.addEventListener("keydown", function(event) {

    if (
        (event.key >= "0" && event.key <= "9") ||
        event.key === "."
    ) {
        addNumber(event.key);
    }

    else if ("+-*/%".includes(event.key)) {
        chooseOperator(event.key);
    }

    else if (event.key === "Enter" || event.key === "=") {
        calculate();
    }

    else if (event.key === "Escape") {
        clearDisplay();
    }

    else if (event.key === "Backspace") {
        deleteLast();
    }
});