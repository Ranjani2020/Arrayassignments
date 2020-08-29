//defining a function
//function <function-name>()
//{
    // code to be executed
//};

//calling a function
//<function-name>();

//function ShowMessage() {
   // alert("Hello World!");
//}
//ShowMessage();
//Function Parameters
//function ShowMessage(firstName, lastName) {
    //alert("Hello " + firstName + " " + lastName);
//}
//ShowMessage("Steve", "Jobs");
//ShowMessage("Bill", "Gates");
//ShowMessage(100, 200);

//function ShowMessage(firstName, lastName) {
    //alert("Hello " + firstName + " " + lastName);
//}
//ShowMessage("Steve", "Jobs", "Mr."); 
//ShowMessage("Bill"); 
//ShowMessage(); 

//Arguments Object
//function ShowMessage() {
    //alert("Hello " + arguments[0] + " " + arguments[1]);
//}
//ShowMessage("Steve", "Jobs"); 
//ShowMessage("Bill", "Gates");
//ShowMessage(100, 200);
//An arguments object can be iterated using for loop.
//function ShowMessage() {
 // for(var i = 0; i < arguments.length; i++){
       // alert(arguments[i]);
    //}
//}
//ShowMessage("Steve", "Jobs"); 
//A function can return zero or one value using return keyword
//function Sum(val1, val2) {
   // return val1 + val2;
//};
//document.getElementById("p1").innerHTML = Sum(10,20); 
//function Multiply(val1, val2) {
    //console.log( val1 * val2);
//};
//document.getElementById("p2").innerHTML =  Multiply(10,20);

//A function can return another function in JavaScript.
//function multiple(x) {
 //function fn(y)
  //  {
   //     return x * y;
    //}
 //return fn;
//}
//var triple = multiple(3);
//document.getElementById("p1").innerHTML = triple(2); 
//document.getElementById("p2").innerHTML = triple(3); 

//JavaScript allows us to assign a function to a variable and then use that variable as a function. It is called function expression.
//var add = function sum(val1, val2) {
   // return val1 + val2;
//};
//document.getElementById("p1").innerHTML = add(10,20);
//document.getElementById("p2").innerHTML = sum(10,20); // not valid

//Anonymous function is useful in passing callback function.
//var showMessage = function (){
    //alert("Hello World!");
//};
//showMessage();
//var sayHello = function (firstName) {
  //  alert("Hello " + firstName);
//};
//showMessage();
//sayHello("Bill");

//a function can have one or more inner functions Nested Functions
//function ShowMessage(firstName)
	//	{
		//	function SayHello() {
		//		alert("Hello " + firstName);
		//	}
//return SayHello();
	//	}
//	ShowMessage("Steve");
