const add = function(num1, num2) {
    return (Number(num1) + Number(num2));
}
const subtract = function(num1, num2) {
    return (Number(num1) - Number(num2));
}
const divide = function(num1, num2) {
    return (Number(num1) / Number(num2));
}
const multiply = function(num1, num2) {
    console.log(num1);
    console.log(num2);
    return (Number(num1) * Number(num2));
}
// const operate = function(num1, operator) {
//     // document.getElementById("screen").textContent = "";
//     displayString = "";
    document.getElementById("=").addEventListener("click", function() {
        if (operator == "/") {
            console.log("hm");
            document.getElementById("screen").textContent = (divide(num1, document.getElementById("screen").textContent));
            answer = document.getElementById("screen").textContent;
            num1 = null;
            num2 = null;
            operator = null;
            return;
        }
        else if (operator == "x") {
            document.getElementById("screen").textContent = (multiply(num1, document.getElementById("screen").textContent));
            answer = document.getElementById("screen").textContent;
            num1 = null;
            num2 = null;
            operator = null;
            return;
        }
        else if (operator == "-") {
            document.getElementById("screen").textContent = (subtract(num1, document.getElementById("screen").textContent));
            answer = document.getElementById("screen").textContent;
            num1 = null;
            num2 = null;
            operator = null;
            return;
        }
        else if (operator == "+") {
            document.getElementById("screen").textContent = (add(num1, document.getElementById("screen").textContent));
            answer = document.getElementById("screen").textContent;
            num1 = null;
            num2 = null;
            operator = null;
            return;
        }
    }); 

//     document.getElementById("Clear").addEventListener("click", function() {
//         document.getElementById("screen").textContent = "0";
//         num1 = null;
//         num2 = null;
//         operator = null;
//         answer = null;
//         return;
//     });
// }

let num1;
let num2;
let operator;
let answer;
let displayString;

document.getElementById(".").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = ".";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += ".";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("1").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "1";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "1";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("2").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "2";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "2";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("3").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "3";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "3";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("4").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "4";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "4";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("5").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "5";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "5";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("6").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "6";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "6";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("7").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "7";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "7";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("8").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "8";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "8";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("9").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "9";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "9";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("0").addEventListener("click", function() {
    if (document.getElementById("screen").textContent == 0) {
        displayString = "0";
        document.getElementById("screen").textContent = displayString;
    } else {
    displayString += "0";
    document.getElementById("screen").textContent = displayString;
    }
});

document.getElementById("Clear").addEventListener("click", function() {
    document.getElementById("screen").textContent = "0";
    num1 = null;
    num2 = null;
    operator = null;
});

document.getElementById("Delete").addEventListener("click", function() {
    displayString = displayString.slice(0, -1);
    document.getElementById("screen").textContent = displayString;
});

document.getElementById("/").addEventListener("click", function() {
    if (operator == "/") {
        num2 = document.getElementById("screen").textContent;
        document.getElementById("screen").textContent = divide(num1, num2);
        num1 = document.getElementById("screen").textContent;
        displayString = "";
        // operate(num1, operator="/");
    } else if (operator) {
        num2 = document.getElementById("screen").textContent;
        if (operator == "x") {
            document.getElementById("screen").textContent = multiply(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "/";
    }
        if (operator == "-") {
            document.getElementById("screen").textContent = subtract(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "/";
    }
        if (operator == "+") {
            document.getElementById("screen").textContent = add(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "/";
}
}
    else {
    operator = "/";
    num1 = document.getElementById("screen").textContent;
    displayString = "";
    // operate(num1, operator="/")
    }
});
document.getElementById("x").addEventListener("click", function() {
    if (operator == "x") {
        num2 = document.getElementById("screen").textContent;
        document.getElementById("screen").textContent = multiply(num1, num2);
        num1 = document.getElementById("screen").textContent;
        displayString = "";
        // operate(num1, operator="/");
    } else if (operator) {
        num2 = document.getElementById("screen").textContent;
        if (operator == "/") {
            document.getElementById("screen").textContent = divide(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "x";
    }
        if (operator == "-") {
            document.getElementById("screen").textContent = subtract(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "x";
    }
        if (operator == "+") {
            document.getElementById("screen").textContent = add(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "x";
}
    }
    else {
    operator = "x";
    num1 = document.getElementById("screen").textContent;
    displayString = "";
    // operate(num1, operator="x")
    }
});
document.getElementById("-").addEventListener("click", function() {
    if (operator == "-") {
        num2 = document.getElementById("screen").textContent;
        document.getElementById("screen").textContent = subtract(num1, num2);
        num1 = document.getElementById("screen").textContent;
        displayString = "";
        // operate(num1, operator="/");
    } else if (operator) {
        num2 = document.getElementById("screen").textContent;
        if (operator == "/") {
            document.getElementById("screen").textContent = divide(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "-";
    }
        if (operator == "x") {
            document.getElementById("screen").textContent = multiply(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "-";
    }
        if (operator == "+") {
            document.getElementById("screen").textContent = add(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "-";
}
    }
    else {
    operator = "-";
    num1 = document.getElementById("screen").textContent;
    displayString = "";
    // operate(num1, operator="x")
    }
});
document.getElementById("+").addEventListener("click", function() {
    if (operator == "+") {
        num2 = document.getElementById("screen").textContent;
        document.getElementById("screen").textContent = add(num1, num2);
        num1 = document.getElementById("screen").textContent;
        displayString = "";
        // operate(num1, operator="/");
    } else if (operator) {
        num2 = document.getElementById("screen").textContent;
        if (operator == "/") {
            document.getElementById("screen").textContent = divide(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "+";
    }
        if (operator == "-") {
            document.getElementById("screen").textContent = subtract(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "+";
    }
        if (operator == "x") {
            document.getElementById("screen").textContent = multiply(num1, num2);
            num1 = document.getElementById("screen").textContent;
            displayString = "";
            operator = "+";
}
    }
    else {
    operator = "+";
    num1 = document.getElementById("screen").textContent;
    displayString = "";
    // operate(num1, operator="x")
    }
});

document.getElementById("Clear").addEventListener("click", function() {
    document.getElementById("screen").textContent = "0";
    num1 = null;
    num2 = null;
    answer = null;
    operator = null;
    return;
});