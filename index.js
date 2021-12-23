
var array = [1, 2, 3, 3, 5, 3, 4, 5, 5];
var newArr=  Array.from(new Set(array));
var duplicateArr = array;
var sum = 0;

for(var i= 0; i< newArr.length; i++){
    var count   = -1;
    for(var j= 0; j< duplicateArr.length; j++){
        if(newArr[i] === duplicateArr[j]){

            count+=1;
            sum+=count;

        }
    }
}

console.log("tong: " + sum);