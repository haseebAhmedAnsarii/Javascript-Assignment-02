
// ******************************
        // CHAPTER # 21 - 25:
// ******************************

        // Task # 01 :-

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);

        // Task # 02 :-

// var favMobile = prompt("Enter Your Favourite Mobile Phone Model");
// document.write("My favourite phone is: " + favMobile + "<br>Length of string: " + favMobile.length);

        // Task # 03 :-

// var myString = "Pakistani";
// document.write("String: " + myString + "<br>Index of 'n': " + myString.indexOf("n"));

        // Task # 04 :-

// var myString = "Hello World";
// document.write("String: " + myString + "<br>Last index of 'l': " + myString.lastIndexOf("l"));

        // Task # 05 :-

// var myString = "Pakistani";
// document.write("String: " + myString + "<br>Character at index 3: " + myString.charAt(3));

        // Task # 06 :-

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" ",lastName);
// alert("Hello " + fullName);

        // Task # 07 :-

// var city = "Hyderabad";
// document.write("City: " + city + "<br>After replacement: " + city.replace("Hyder","Islam"));

        // Task # 08 :-

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// document.write("<b>Message:</b> " + message + "<br><br><b>After replacement:</b> "
// + message.replace(/and/g,"&"));

        // Task # 09 :-

// var myString = "472";
// var myNo = Number(myString);
// document.write("Value: " + myString + "<br>Type: " + typeof(myString)
// + "<br>Value: " + myNo + "<br>Type: " + typeof(myNo));

        // Task # 10 :-

// var input = prompt("Enter Anything");
// document.write("User input: " + input + "<br>Upper case: " + input.toUpperCase());

        // Task # 11 :-

// var input = prompt("Enter Anything");
// var titleCase = input.charAt(0).toUpperCase();
// for(var i=1 ; i < input.length ; i++){
//         titleCase = titleCase.concat(input.charAt(i));
// }
// document.write("User input: " + input + "<br>Title case: " + titleCase);

        // Task # 12 :-

// var num = 35.36 ;
// var myString = num.toString().split("");
// myString.splice(myString.indexOf("."),1);
// document.write("Number: " + num + "<br>Result: " + myString.join(""));

        // Task # 13 :-

// var myName = prompt("Enter Your Name");
// for(var i=0 ; i < myName.length ; i++){
//         if(myName.charCodeAt(i) == 33 || myName.charCodeAt(i) == 44 || myName.charCodeAt(i) == 46
//         || myName.charCodeAt(i) == 64){
//                 alert("Please enter a valid username");
//                 break;
//         }
// }

        // Task # 14 :-

// var A = ["cake","apple pie","cookie","chips","patties"];
// var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// item = item.toLowerCase();
// if(A.indexOf(item) == -1){
//         document.write("We are sorry. " + item + " is <b>not available</b> in our bakery");
// }
// else{
//         document.write(item + " is <b>available</b> at index " + A.indexOf(item) + " in our bakery");
// }

        // Task # 15 :-

// var password = prompt("Enter Your Password");
// if(password.length >= 6){
//         if(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57){
//                 document.write("Entered password: " + password 
//                 +  "<br>Password cannot begin with a number <br>Please enter a valid password");
//         }
//         else{
//                 for(var i = 0 ; i < password ; i++){
//                         if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
//                                 if((password.charCodeAt(i) >=65 && password.charCodeAt(i) <=90) 
//                                  || (password.charCodeAt(i) >=97 && password.charCodeAt(i) <=122)){
//                                         alert("ok");
//                                         break;
//                                 }
//                                 else{
//                                         alert("Please enter a valid password with characters")
//                                 }
//                         }
//                         else{
//                                 alert("Please enter a valid password with numbers")
//                         }
//                 }
//         }
// }
// else{
//         document.write("Entered password: " + password 
//         +  "<br>Password must contain atleast 6 characters <br>Please enter a valid password");
// }

        // Task # 16 :-

// var university = "University of Karachi";
// university = university.split("");
// for(var i = 0 ; i < university.length ; i++){
//         document.write(university[i] + "<br>");
// }

        // Task # 17 :-

// var myInput = prompt("Enter Anything");
// document.write("User input: " + myInput + "<br>Last character of input: " 
// + myInput.charAt(myInput.length-1));

        // Task # 18 :-

// var myText = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + myText + "<br>");
// myText = myText.toLowerCase();
// var count = 0 ;
// for (var i = 0; i < myText.length; i++) {
// if (myText.slice(i, i + 3) === "the") {
//         count++;
//         }
// }
// document.write("There are " + count + " occurrence(s) of word 'the'");





// ******************************
        // CHAPTER # 26 - 30:
// ******************************





        // Task # 01 :-

// var num = prompt("Enter any positive integer");
// document.write("number: " + num + "<br>round off value: " + Math.round(num) + "<br>floor value: " 
// + Math.floor(num) + "<br>ceil value: " + Math.ceil(num));

        // Task # 02 :-

// var num = prompt("Enter any negative floating point number");
// document.write("number: " + num + "<br>round off value: " + Math.round(num) + "<br>floor value: " 
// + Math.floor(num) + "<br>ceil value: " + Math.ceil(num));

        // Task # 03 :-

// var num = -4 ;
// document.write("The absolute value of " + num + " is " + Math.abs(num));

        // Task # 04 :-

// var dice = Math.random()*6 ;
// document.write("random dice value: " + Math.ceil(dice));

        // Task # 05 :-

// var coin = Math.random()*2 ;
// if(Math.ceil(coin) == 1){
//         document.write(Math.ceil(coin) + "<br>random coin value: Tails");
// }
// else{
//         document.write(Math.ceil(coin) + "<br>random coin value: Heads");
// }

        // Task # 06 :-

// var randomNo = Math.random()*100;
// document.write("random number between 1 and 100: " + Math.ceil(randomNo));

        // Task # 07 :-

// var weight = prompt("Enter your weight in kilograms");
// var weight2 = "";
// weight = weight.split("");
// for(var i = 0 ; i < weight.length ; i++){
//         if((weight[i].charCodeAt(0) >= 48 && weight[i].charCodeAt(0) <= 57) || weight[i] == '.'){
//                 weight2 = weight2 + weight.slice(i,i+1) 
//         }else{
//                 break;
//         }
// }
// document.write("The weight of user is " + weight2 + " kilograms");

        // Task # 08 :-

// var secretNo = Math.random()*10;
// secretNo = Math.ceil(secretNo);
// var guessNo = prompt("Enter a number between 1 and 10");
// if(guessNo == secretNo){
//         alert("Congratulations! You guess the right number");
// }
// else{
//         alert("Try again!");
// }





// ******************************
        // CHAPTER # 31 - 34:
// ******************************





        // Task # 01 :-

// var dateTimeNow = new Date() ;
// document.write(dateTimeNow) ;

        // Task # 02 :-

// var monthNames = ["January","Febuary","March","April","May","June"
// ,"July","August","September","October","November","December"];
// var dateTimeNow = new Date();
// var month = dateTimeNow.getMonth();
// alert("Current month: " + monthNames[month]);

        // Task # 03 :-

// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var dateTimeNow = new Date();
// var day = dateTimeNow.getDay();
// alert("Today is " + dayNames[day]);

        // Task # 04 :-

// var dateTimeNow = new Date();
// var day = dateTimeNow.getDay();
// if(day == 0 || day == 6){
//         document.write("It’s Fun day");
// }

        // Task # 05 :-

// var dateTimeNow = new Date();
// var date = dateTimeNow.getDate();
// if(date < 16){
//         document.write("First fifteen days of the month");
// }
// else{
//         document.write("Last days of the month")
// }

        // Task # 06 :-

// var dateTimeNow = new Date() ;
// var milli = dateTimeNow.getTime()/1000/60;
// document.write("Current Date: " + dateTimeNow + "<br>Elapsed milliseconds since January 1,1970: " 
// + dateTimeNow.getTime() + "<br>Elapsed minutes since January 1,1970: " + milli) ;      

        // Task # 07 :-

// var dateTimeNow = new Date();
// var hours = dateTimeNow.getHours();
// if(hours < 12){
//         document.write("It's AM");
// }
// else{
//         document.write("It's PM")
// }

        // Task # 08 :-

// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: " + laterDate);

        // Task # 09 :-

// var startDate = new Date("Apr 25, 2020");
// var dateTimeNow = new Date();
// var millisD = startDate.getTime();
// var millidTN = dateTimeNow.getTime();
// var diff = milliDTN - milliSD;
// var days = diff/1000/60/60/24;
// alert(Math.floor(days) + " days have passed since 1st Ramadan,2020");

        // Task # 10 :-

// var dateTimeNow = new Date();
// var begin2015 = new Date("Jan 01, 2015");
// var millidTN = dateTimeNow.getTime();
// var millib2015 = begin2015.getTime();
// var diff = millidTN - millib2015;
// var seconds = diff/1000;
// document.write("On reference date " + dateTimeNow + ",<br>" + Math.floor(seconds) 
// + " seconds had passed since beginning of 2015");

        // Task # 11 :-

// var dateTimeNow = new Date();
// var hours = dateTimeNow.getHours();
// document.write("current date: " + dateTimeNow);
// var oneHourAgo = dateTimeNow.setHours(hours-1);
// document.write("<br>1 hour ago, it was " + dateTimeNow);

        // Task # 12 :-

// var dateTimeNow = new Date();
// var dateTimeNow2 = new Date();
// var years = dateTimeNow2.getFullYear();
// dateTimeNow2.setFullYear(years-100);
// var hundredYearAgo = dateTimeNow2 ;
// alert("current date: " + dateTimeNow + "\n100 years back, it was " + hundredYearAgo);

        // Task # 13 :-

// var age = prompt("Enter Your Age");
// var dateTimeNow = new Date();
// var years = dateTimeNow.getFullYear();
// dateTimeNow.setFullYear(years-age);
// var birthYear = dateTimeNow.getFullYear();
// document.write("Your age is " + age + "<br>Your birth year is " + birthYear);

        // Task # 14 :-

// var customerName = prompt("Enter Your Name");
// var monthNames = ["January","Febuary","March","April","May","June"
// ,"July","August","September","October","November","December"];
// var dateTimeNow = new Date();
// var month = dateTimeNow.getMonth();
// var noOfUnits = prompt("Enter Your Number Of Units");
// var chargePerUnit = 16 ;
// var netAmount = noOfUnits * chargePerUnit ;
// var lateCharge = 350 ;
// var grossAmount = netAmount + lateCharge ;
// document.write("<h1>K-Electric Bill</h1>Customer Name: <b>" + customerName 
// + "</b><br>Month: <b>" + monthNames[month] + "</b><br>Number of units: <b>" 
// + noOfUnits + "</b><br>Charges per unit: <b>16</b><br><br>Net Amount Payable (within Due Date): <b>" 
// + netAmount + "</b><br>Late payment surcharge: <b>" + lateCharge + "</b><br>Gross Amount Payable (after Due Date): <b>" 
// + grossAmount + "</b>") ;





// ******************************
        // CHAPTER # 35 - 38:
// ******************************





        // Task # 01 :-

// function currentDateTime(){
//      var dateTimeNow = new Date();
//      document.write(dateTimeNow);
// }
// currentDateTime();

        // Task # 02 :-

// function abc() {
//         var firstName = prompt("enter first name");
//         var lastName = prompt("enter last name");
//         document.write("Hello " + firstName + " " + lastName);
// }
// abc();

        // Task # 03 :-

// function sum() {
//         var firstNo = prompt("Enter first number");
//         var secondNo = prompt("Enter second number");
//         var sum = Number(firstNo) + Number(secondNo);
//         return sum ;
// }
// var result = sum();
// document.write("Sum of two numbers is " + result);

        // Task # 04 :-

// function calculate(num1, num2, operator) {
//         var result ;
//         if (operator == "+") {
//                 result = Number(num1) + Number(num2);
//                 return "Sum of two numbers is " + result;
//         } else if (operator == "-") {
//                 result = num1 - num2;
//                 return "Subtraction of two numbers is " + result;
//         } else if (operator == "*") {
//                 var result = num1 * num2;
//                 return "Multiplication of two numbers is " + result;
//         } else if (operator == "/") {
//                 var result = num1 / num2;
//                 return "Division of two numbers is " + result;
//         }
// }
// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// var operator = prompt("Enter operator");
// document.write(calculate(num1, num2, operator));
        
        // Task # 05 :-

// function square(num) {
//         var result = num ** 2;
//         document.write("Square of " + num + " is " + result);
// }
// var num = Number(prompt("Enter any number"));
// square(num);

        // Task # 06 :-

// function factorial(n){
//         var answer = 1;
//         if (n == 0 || n == 1){
//           return answer;
//         }
//         else if(n >0){
//                 for(var i = n; i >= 1; i--){
//                         answer = answer * i;
//                 }
//                 return answer;
//         }  
//         else{
//                 return "not possible"
//         }
// }
// var num = Number(prompt("Enter any number"));
// var answer = factorial(num);
// document.write("The factorial of " + num + " is " + answer);

        // Task # 07 :-

// function count() {
//         var startNo = prompt("Enter start number");
//         var endNo = +prompt("Enter end number");
//         for (var i = startNo; i <= endNo; i++) {
//                 document.write(i + "<br>");
//         }
// }
// count();

        // Task # 08 :-

// var base = prompt("Enter base");
// var perpendicular = prompt("Enter perpendicular");
// function calculateHypotenuse() {
//         var hypotenuse = base ** 2 + perpendicular ** 2;
//         function  calculateSquare(hypotenuse) {
//                 var c = Math.sqrt(hypotenuse);
//                 document.write("Hypotenuse is : " + c);
//         }
//         calculateSquare(hypotenuse);
// }
// calculateHypotenuse();

        // Task # 09 :-

// var width = 7;
// var height = 4;
// function areaOfRectangle(width,height){
//         var area = width * height;
//         return area;
// }
// var result = areaOfRectangle(2,15);
// var result = areaOfRectangle(width,height);
// document.write("The area of rectangle is " + result);

        // Task # 10 :-

// function checkPalindrome(myString){
//         var reverse = myString.split("").reverse().join("");
//         if(reverse == myString){
//                 return myString + " is palindrome";
//         }
//         else{
//                 return myString + " is not palindrome";
//         }
// }
// var word = prompt("Enter any word");
// document.write(checkPalindrome(word));

        // Task # 11 :-

// function uppercase(string)
// {
//   var array1 = string.split(' ');
//   var array2 = [];
//   for(var i = 0; i < array1.length; i++){
//         array2[i]=array1[i].charAt(0).toUpperCase()+array1[i].slice(1);
//   }
//   return array2.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

        // Task # 12 :-

// function longestWord(text) {
//   var wordArray = text.split(" ");
//   var maxLength = 0;
//   var result = "";
//   for (var i = 0; i < wordArray.length; i++) {
//     if (wordArray[i].length > maxLength) {
//       maxLength = wordArray[i].length;
//       result = wordArray[i];
//     }
//   }
//   return result;
// }
// document.write(longestWord("Web Development Tutorial"));

        // Task # 13 :-

// function charCount(string, letter) {
//   var letterCount = 0;
//   for (var i = 0; i < string.length; i++) {
//     if (string.charAt(i) == letter) {
//       letterCount += 1;
//     }
//   }
//   return letterCount;
// }
// document.write(charCount("JSResourceS.com", "o"));

        // Task # 14 :-

// function calcCircumference(r) {
//         var a = 2 * 3.142 * r;
//         document.write("The circumference is " + a + "<br>");
// }
// function calcArea(r) {
//         var b = 3.142 * r ** 2;
//         document.write("The area is " + b);
// }
// var r = prompt("Enter radius of a circle");
// calcCircumference(r);
// calcArea(r);