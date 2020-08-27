//const array = [1, 2, 3,[4,5,[6,7]],8];result[1,2,3,4,5,6,7,8]

//const array = [1, 2, 3,[4,5,[6,7]],8];
//const flatarray = array.flat(2);

//console.log(flatarray);
//Remove values from array
//const arr = [0,1,false,"a"," ",3,null,undefined]result[1,"a",3]

const arr = [0,1,false,"a"," ",3,null,undefined]
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

       if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([0,1,false,"a","",3,null,undefined]));