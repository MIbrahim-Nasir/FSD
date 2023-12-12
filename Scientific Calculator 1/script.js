let operation = "";
let add_num = 0;
let subtract_num = 0;
let multiply_num = 1;
let divide_num = 1;
let power_num = 1;
let root_num = 2;
let exp_num = 1;

function number(n) {
    document.getElementById("display").value += n;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function add() {
    operation = "add";
    if(add_num>0){
        add_num += document.getElementById("display").value;
    }
    else{
        add_num = document.getElementById("display").value;
    }
    clearDisplay();
}

function subtract() {
    operation = "subtract";
    subtract_num = document.getElementById("display").value;
    clearDisplay();
}

function multiply() {
    operation = "multiply";
    multiply_num = document.getElementById("display").value;
    clearDisplay();
}

function divide() {
    operation = "divide";
    divide_num = document.getElementById("display").value;
    clearDisplay();
}

function square() {
    document.getElementById("display").value = document.getElementById("display").value * document.getElementById("display").value;
}

function squareRoot() {
    document.getElementById("display").value = Math.sqrt(document.getElementById("display").value);
}

function percentage() {
    document.getElementById("display").value = document.getElementById("display").value / 100;
}

function pi() {
    document.getElementById("display").value = Math.PI;
}

function sin() {
    document.getElementById("display").value = Math.sin(document.getElementById("display").value);
}

function cos() {
    document.getElementById("display").value = Math.cos(document.getElementById("display").value);
}

function tan() {
    document.getElementById("display").value = Math.tan(document.getElementById("display").value);
}

function log() {
    document.getElementById("display").value = Math.log(document.getElementById("display").value);
}

function exp() {
    document.getElementById("display").value = Math.exp(document.getElementById("display").value);
}

function factorial() {
    let fact = 1;
    for (let i = 1; i <= document.getElementById("display").value; i++) {
        fact = fact * i;
    }
    document.getElementById("display").value = fact;
}

function decimal() {
    document.getElementById("display").value += ".";
}

function leftBracket() {
    document.getElementById("display").value += "(";
}

function rightBracket() {
    document.getElementById("display").value += ")";
}

function allClear() {
    document.getElementById("display").value = "";
    add_num = 0;
    subtract_num = 0;
    multiply_num = 1;
    divide_num = 1;
    operation = "";
    power_num = 1;
    root_num = 2;
    exp_num = 1;

}

function power() {
    operation = "power";
    power_num = document.getElementById("display").value;
    clearDisplay();
}

function equals() {
    if (operation == "add") {
        result = parseInt(add_num) + parseInt(document.getElementById("display").value);
    } else if (operation == "subtract") {
        result = parseInt(subtract_num) - parseInt(document.getElementById("display").value);
    } else if (operation == "multiply") {
        result = parseInt(multiply_num) * parseInt(document.getElementById("display").value);
    } else if (operation == "divide") {
        result = parseInt(divide_num) / parseInt(document.getElementById("display").value);
    } else if (operation == "power") {
        result = Math.pow(parseInt(power_num), parseInt(document.getElementById("display").value));
    } else if (operation == "root") {
        result = Math.pow(parseInt(root_num), 1 / parseInt(document.getElementById("display").value));
    } else if (operation == "log") {
        result = Math.log(parseInt(log_num), parseInt(document.getElementById("display").value));
    } else if (operation == "exp") {
        result = Math.exp(parseInt(exp_num), parseInt(document.getElementById("display").value));
    } else if (operation == "sin") {
        result = Math.sin(parseInt(document.getElementById("display").value));
    } else if (operation == "cos") {
        result = Math.cos(parseInt(document.getElementById("display").value));
    } else if (operation == "tan") {
        result = Math.tan(parseInt(document.getElementById("display").value));
    } else if (operation == "factorial") {
        let fact = 1;
        for (let i = 1; i <= parse(document.getElementById("display").value); i++) {
            fact = fact * i;
        }
        result = fact;
    } else if (operation == "percentage") {
        result = parseInt(document.getElementById("display").value) / 100;
    } else if (operation == "pi") {
        result = Math.PI;
    }
    document.getElementById("display").value = result;
}
