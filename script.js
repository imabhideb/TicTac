let currPlyr = "X";
let board = Array(9).fill(null)

function handleClick(cl){
    const id = Number(cl.id);
    if (board[id] !== null) return;
    board[id] = currPlyr;
    cl.innerText = currPlyr;
    checkWinner();
    currPlyr = currPlyr === "X" ? "O" : "X";
}

function checkWinner(){
    if(
        (board[0] !== null && board[0] == board[1] && board[1] == board[2]) ||
        (board[3] !== null && board[3] == board[4] && board[4] == board[5]) ||
        (board[6] !== null && board[6] == board[7] && board[7] == board[8]) ||

        (board[0] !== null && board[0] == board[3] && board[3] == board[6]) ||
        (board[1] !== null && board[1] == board[4] && board[4] == board[7]) ||
        (board[2] !== null && board[2] == board[5] && board[5] == board[8]) ||

        (board[0] !== null && board[0] == board[4] && board[4] == board[8]) ||
        (board[6] !== null && board[6] == board[4] && board[4] == board[2]) 
    ){
        document.write(`Winner is ${currPlyr}`)
        return;
    }
    if (!board.some((e) => e === null)){
        document.write(`Hey its a draw`)
    }
}