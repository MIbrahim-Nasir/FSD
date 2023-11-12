const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restartButton');
const winConditions = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left col
    [1, 4, 7], // middle col
    [2, 5, 8], // right col
    [0, 4, 8], // top left to bottom right
    [2, 4, 6] // top right to bottom left
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    
    if(options[cellIndex] != "" || !running)
    {
        return;
    }

    updateCell(this, cellIndex);

    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++)
    {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == "")
        {
            continue;
        }
        if(cellA == cellB && cellB == cellC)
        {
            roundWon = true;
            break;
        }
    }

    if(roundWon)
    {
        statusText.textContent = `${currentPlayer} has won!`;
        running = false;
    }
    else if(!options.includes(""))
    {
        statusText.textContent = "It's a draw!";
        running = false;
    }
    else
    {
        changePlayer();
    }
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}