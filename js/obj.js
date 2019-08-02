class Tile {
    constructor(pawnOn = false, color, x, y, ref) {
        this.pawnOn = pawnOn
        this.color = color
        this.x = x
        this.y = y
        this.ref = ref
    }
    colorOnBoard(color, ref) {
        if (color == "whiteTile") {
            return "blackTile";
        }
        else if (color == "blackTile") {
            return "whiteTile";
        }
    }
}
class Pawn {
    constructor(color, ref) {
        this.color = color;
        this.ref = ref;
    }
}



class Board {
    constructor(size) {
        this.size = size
    }
    createboard() {
        let wrap = document.getElementById("wraper")
        let board = document.createElement("div");
        board.classList.add("board");
        wrap.appendChild(board);
        let gameBoard = [];
        let tileColor = "whiteTile";
        for (let i = 0; i < this.size; i++) {
            gameBoard[i] = []
            for (let j = 0; j < this.size; j++) {
                let tile = document.createElement("span");
                gameBoard[i][j] = new Tile(false, tileColor, i, j, tile);
                tile.classList.add(tileColor, "tile");
                tileColor = gameBoard[i][j].colorOnBoard(tileColor);

                board.appendChild(tile);
            }
            if (i % 2 == 0) {
                tileColor = "blackTile";
            }
            else {
                tileColor = "whiteTile"
            }

        }
        checkers.createPawns(gameBoard);
    }
    createPawns(gameBoard) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j].color == "blackTile") {
                    let pawn = document.createElement("span");
                    pawn.classList.add("pawn");
                    gameBoard[i][j].ref.appendChild(pawn);
                    let Pawn = new Pawn("blue", pawn);
                }
            }
        }
    }
}

