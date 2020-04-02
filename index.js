
let arr = [],
    ei,
    ej;

const newGame = () => {

    for (let i = 0; i < 4; i++) {
        arr[i] = [];
        for (let j = 0; j < 4; j++) {
            if (i + j != 6) {
                arr[i][j] = i * 4 + j + 1;
            }
            else {
                arr[i][j] = '';
            }
        }
    }
    let elemI = 3;
    let elemJ = 3;
    for (let i = 0; i < 2012; i++) {
        switch (Math.random(3 * Math.random())) {
            case 0: if (elemI != 0) swap(arr, elemI, elemJ, --elemI, elemJ); break;
            case 1: if (ej != 3) swap(arr, elemI, elemJ, elemI, ++elemJ); break;
            case 2: if (ei != 3) swap(arr, elemI, elemJ, ++elemI, elemJ); break;
            case 3: if (ej != 0) swap(arr, elemI, elemJ, elemI, --elemJ);
        }
    }
    let createLayout = document.createElement('div');
    createLayout.classList.add('layout');
    document.querySelector('body').appendChild(createLayout);

    for (let i = 0; i < 4; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        document.querySelector('.layout').appendChild(row);
        for (let j = 0; j < 4; j++) {
            let numbers = document.createElement('div');
            numbers.id = i + " " + j;
            row.appendChild(numbers);

            numbers.onclick = numbersClick;
            numbers.innerHTML = arr[i][j];

        }



    }
}
newGame()

const swapElement = (arr, [i1], [j1], [i2], [j2]) => {
    let temp = arr[i1][j1];
    arr[i1][j1] = arr[i2][j2];
    arr[i2][j2] = temp;
}

const numbersClick = (e) => {
    let el = event.target;

    let i = el.id.charAt(0),
        j = el.id.charAt(2);

    if ((i == ei && Math.abs(j - ej) == 1) || (j == ej && Math.abs(i - ei) == 1)) {
        document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
    }
    el.innerHTML = "";
    ei = i;
    ej = j;

    let q = true;
    for (i = 0; i < 4; ++i) {
        for (j = 0; j < 4; ++j) {
            if (i + j != 6 && document.getElementById(i + " " + j).innerHTML != i * 4 + j + 1) {
                q = false;
                break;
            }
            if (q) alert("Victory!");
        }
    }

}

