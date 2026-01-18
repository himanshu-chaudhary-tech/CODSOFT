// Simple calculator showing full expression

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let expression = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        let value = buttons[i].innerText;

        // If number or operator
        if ((value >= "0" && value <= "9") || value === "+" || value === "-" || value === "*" || value === "/") {
            expression += value;
            display.value = expression;
        }

        // If equal button
        else if (value === "=") {
            try {
                let result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
        }

        // Clear button
        else if (value === "C") {
            expression = "";
            display.value = "";
        }
    });
}
