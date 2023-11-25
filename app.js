var options = [
    'unrealistic expectations',
    'marriage proposal',
    'leading lady hates christmas at first',
    'dance scene',
    'jingle bells plays',
    'cliche third act misunderstanding',
    'christmas-themed character name',
    'someone is pregnant',
    'tears lead to a hug',
    'sassy kid character',
    'leading male is small-town single guy',
    'at least one parent dead',
    'fake-looking laughter',
    'long. awkward. pause.',
    'one character is in plummeting career deline',
    'true meaning of christmas',
    'impeccably perfect christmas decorations',
    'a character is secretly santa claus',
    'scrooge character',
    'GBF',
    'airport chase scene',
    'cast is all white',
    'winter storm',
    'one actor was really famous at some point',
    'D.J. from Full House',
    '\"how does their job pay for this?\"',
    'skiing',
    'christmas-themed cocktail',
    'product placement',
    'leading lady already in a relationship',
    'they bake at some point',
    'leading male has had his heart broken before',
    'dead wife',
    'title is a Christmas pun',
    'cringe-worthy misletoe scene',
    'name of town is vaguely winter-y',
    'crucial conversation interrupted',
    'significant other shows up unexpectedly',
    'someone becomes irrationally upset',
    'High School Musical star'
]

var  MakeBoardList = () => {
    var numOptions = options.length; //number of squares to choose from
    var thisBoard = [];
    for (var i = 0; i < 25; i++) {
        var done = false;
        while(!done) {
            var index = Math.floor((Math.random() * numOptions));
            if(!thisBoard.includes(index)) {
                thisBoard.push(index);
                done = true;
            }
        }
    }
    return thisBoard;
}

var MakeBoardGrid = (boardList) => {
    var boardGrid = []
    for (var i = 0; i < 5; i++) {
        var thisRow = [];
        for (var j = 0; j < 5; j++) {
            thisRow.push(options[boardList[i * 5 + j]])
        }
        boardGrid.push(thisRow);
    }
    boardGrid[2][2] = 'FREE!'
    return boardGrid;
}


var boardList = MakeBoardList();
var boardGrid = MakeBoardGrid(boardList);

var table = document.getElementById("myTable");

for (var i = 0; i < 5; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
        var cell = document.createElement("td");
        cell.innerHTML = boardGrid[i][j];
        row.appendChild(cell);
        
    }
    table.appendChild(row);
}

