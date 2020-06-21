
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