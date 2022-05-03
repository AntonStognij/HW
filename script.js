//Задача 1
var arr =  [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, {name: 'Nastya', age: 40} ]
arr.sort(function (a, b){
        if(a.age > b.age) return -1
        if(a.age === b.age) return 0
        if(a.age < b.age) return 1
    })
console.log(arr)

 
//Задача 2

var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];

function filterFalse(arr) {
    var newArr = arr.filter(function (item, index){
    return item;
})
return newArr
}

console.log(filterFalse(arr))

//Задача 3

var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null, NaN];
function find(arr, value) {
    var indexArr = [];
    for (i=0; i < arr.length; i++){
       
        if (arr[i] === value) {
            indexArr.push(i)
        }
        if (Number.isNaN(arr[i]) && Number.isNaN(value)){
            indexArr.push(i)
        }
    }
    return indexArr
}
console.log(find(arr, NaN))

//Задача 4

//функция делает массив указаной длины
function createArr(col=0){
    var arr = []
    for (i = 0; i < col; i++ ){
        var arrElem = Math.ceil(Math.random()*100);   
        arr.push(arrElem);

    }
    return arr
}
   
// функция собирает матрицу
function createMatrix(row, col) {
    var matrix = [];
    for (j = 0; j < row; j++){
        var randomArr = createArr(col) ;
        matrix.push(randomArr)
    }
    return matrix
}

console.log(createMatrix(5, 6))

//по бонусному уровню - в результате все равно прихожу к похожему варианту, что делали на паре, решил уже не дублировать, но в принципе логику понял