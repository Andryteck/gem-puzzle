
let arr = [];

const newGame = () => {
    
    for (let i = 0; i < 4; i++) {
        arr[i] = [];
        for (let j = 0; j< 4; j++) {
            if (i + j !=6) {
                arr[i][j]= i*4 + j +1;
            }
            else {
                arr[i][j] = '';
            }
        }
    }
    let elemI = 3;
    let elemJ = 3;
    for (let i = 0; i < 2012; i++ ) {
        switch(Math.random(3 * Math.random())) {
            case 0: if(elemI != 0) swap(arr,elemI,elemJ,--elemI,elemJ); break; 
			case 1: if(ej != 3) swap(arr,elemI,elemJ,elemI, ++elemJ); break; 
			case 2: if(ei != 3) swap(arr,elemI,elemJ,++elemI,elemJ); break; 
			case 3: if(ej != 0) swap(arr,elemI,elemJ,elemI,--elemJ); 
        }
    }
   
}
newGame()

const swapElement = (arr, [i1], [j1], [i2], [j2]) => {
   let temp = arr[i1][j1];
   arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = temp;
}
swapElement(arr, [i1], [j1], [i2],[j2]);
