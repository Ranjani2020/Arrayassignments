//const array = [1, 2, 3,[4,5,[6,7]],8];result[1,2,3,4,5,6,7,8]

//const array = [1, 2, 3,[4,5,[6,7]],8];
//const flatarray = array.flat(2);

//console.log(flatarray);
//Remove values from array
//const arr = [0,1,false,"a"," ",3,null,undefined]result[1,"a",3]

//const arr = [0,1,false,"a"," ",3,null,undefined]
//function filter_array(test_array) {
   // var index = -1,
        //arr_length = test_array ? test_array.length : 0,
       // resIndex = -1,
      //  result = [];

  //  while (++index < arr_length) {
        //var value = test_array[index];

      // if (value) {
           // result[++resIndex] = value;
       // }
   // }

    //return result;
//}
//console.log(filter_array([0,1,false,"a","",3,null,undefined]));


//Remove all undefiend values
//To remove all undefiend values from the array ,we can use the filter() method.

//var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3 ];

//var filtered = arr.filter(function(x) {
 //  return x !== undefined;
//});
//console.log(filtered);
/*
    Output: [ 0, 1, '', false, 2, null, 3]
*/


//Remove all nullish values
//nullish values either null or undefined.to remove all nullish values from the array we can use the != operator.

//var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];
//var filtered = arr.filter(e => e != null);
//console.log(filtered);

/*Output: [ 0, 1, '', false, 2, 3, NaN ]*/

//Remove all holes
//to remove all holes from array use filter()method with call back function it returns true.

//var arr = [0, , , 1, , , , , 2, , , , 3];
//var filtered = arr.filter(() => true);
//console.log(filtered);

/* Output: [ 0, 1, 2, 3 ]*/

//Remove all falsy values
// There  are 7 falsy values in JS.undefined, false, null, ,NaN,"",' ',` `.we can use Boolean constructor to the filter()method.

//var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];
//var filtered = arr.filter(Boolean);
//console.log(filtered);

/* Output: [ 1, 2, 3 ] */

//Declare and Initialize JS Array

//var stringArray = ["one", "two", "three"];
//var numericArray = [1, 2, 3, 4];
//var decimalArray = [1.1, 1.2, 1.3];
//var booleanArray = [true, false, false, true];
//var mixedArray = [1, "two", "three", 4];
//document.getElementById("p1").innerHTML = stringArray;
		//document.getElementById("p3").innerHTML = decimalArray;
		//document.getElementById("p4").innerHTML = booleanArray;
		//document.getElementById("p5").innerHTML = mixedArray;

        //Array Constructor Syntax
       // var stringArray = new Array();
		//stringArray[0] = "one";
		//stringArray[1] = "two";
		//stringArray[2] = "three";
	//	stringArray[3] = "four";

		//var numericArray = new Array(3);
		//numericArray[0] = 1;
		//numericArray[1] = 2;
		//numericArray[2] = 3;

		//var mixedArray = new Array(1, "two", 3, "four");

		//document.getElementById("p1").innerHTML = stringArray;
	//	document.getElementById("p2").innerHTML = numericArray;
    //	document.getElementById("p3").innerHTML = mixedArray; 
    
    