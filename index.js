let arr = [], ei, ej;

let buttonReset = document.createElement('button')
buttonReset.id = 'reset'
document.body.appendChild(buttonReset)
buttonReset.innerHTML = 'Размешать и начать'

let buttonStop = document.createElement('button')
buttonStop.id = 'reset'
document.body.appendChild(buttonStop)
buttonStop.innerHTML = 'Стоп'

let buttonSave = document.createElement('button')
buttonSave.id = 'reset'
document.body.appendChild(buttonSave)
buttonSave.innerHTML = 'Сохранить'

let buttonResult = document.createElement('button')
buttonResult.id = 'reset'
document.body.appendChild(buttonResult)
buttonResult.innerHTML = 'Результаты'

let box = document.createElement('div')
box.id = 'box'
document.body.appendChild(box)

function swap(arr, i1, j1, i2, j2) {
    t = arr[i1][j1];
    arr[i1][j1] = arr[i2][j2];
    arr[i2][j2] = t;
}
window.onload = function () {
    box = document.getElementById("box");
    newGame();
    document.getElementById("reset").onclick = newGame;
}
function cellClick(event) {
    var event = event,
        el = event.srcElement || event.target,
        i = el.id.charAt(0),
        j = el.id.charAt(2);
    if ((i == ei && Math.abs(j - ej) == 1) || (j == ej && Math.abs(i - ei) == 1)) {
        document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
        el.innerHTML = "";
        ei = i;
        ej = j;
        let q = true;
        for (let i = 0; i < 4; ++i)
            for (let j = 0; j < 4; ++j)
                if (i + j != 6 && document.getElementById(i + " " + j).innerHTML != i * 4 + j + 1) {
                    q = false;
                    break;
                }
        if (q) alert("Victory!");
    }
}
function newGame() {
    for (let i = 0; i < 4; ++i) {
        arr[i] = []
        for (let j = 0; j < 4; ++j) {
            if (i + j != 6) {
                arr[i][j] = i * 4 + j + 1;
            } else {
                arr[i][j] = "";
            }
        }
    }
    ei = 3;
    ej = 3;
    for (let i = 0; i < 1600; ++i) {
        switch (Math.round(3 * Math.random())) {
            case 0: if (ei != 0) swap(arr, ei, ej, --ei, ej); break; // up
            case 1: if (ej != 3) swap(arr, ei, ej, ei, ++ej); break; // right
            case 2: if (ei != 3) swap(arr, ei, ej, ++ei, ej); break; // down
            case 3: if (ej != 0) swap(arr, ei, ej, ei, --ej); // left
        }
    }
    let table = document.createElement("table"),
        tbody = document.createElement("tbody");
        box.appendChild( tbody);
        box.appendChild(table);

   
    for (let i = 0; i < 4; ++i) {
        let row = document.createElement("tr");
        for (let j = 0; j < 4; ++j) {
            let cell = document.createElement("td");
            cell.id = i + " " + j;
            cell.onclick = cellClick;
            cell.innerHTML = arr[i][j];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    if (box.childNodes.length == 1) 
    	box.removeChild(box.firstChild);	
    box.appendChild(table);	
    
}

