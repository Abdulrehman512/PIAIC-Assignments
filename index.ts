
// 1-Install Node.js, TypeScript and VS Code on your computer.
// Installed

// 2-Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var personName:string = "Hello Abdul, would you like to learn Python today?"
console.log(personName);


// 3-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var name1:string = "Abdul Rehman"
console.log(name1);
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());

// 4-Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

var quote1:string = 'Someone said, "Trying and Failing is better than Failing to try."'
console.log(quote1);

// 5-Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var famous_person:string = "Albert Einstein";
var message:string = '"A person who never made a mistake never tried anything new."'
console.log(message);

// 6-Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var name2:string = "\t Abdul \n Rehman"
//  \t is used for tab(spaces) and \n is used to start new line.
console.log(name2);

// 7-Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

var addition1:number = 3 + 5;
console.log(addition1);

var subtraction1:number = 40 - 32;
console.log(subtraction1);

var multiplication1:number = 2 * 4;
console.log(multiplication1);

var division1:number = 80 / 10;
console.log(division1);

// 8-You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(2 + 6);
console.log(3 + 5);
// In this program, the output should be eight in all cases.
console.log(1 + 7);
console.log(4 + 4);

// 9-Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var fav_num:number = 7;
console.log("My favorite number is " + fav_num);

// 10-Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Added comments in 2 programs above

// 11-Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var friends_names:string [] = ["Abdul", "Abdullah", "Farhan", "Hafiz"]
console.log(friends_names[0]);
console.log(friends_names[1]);
console.log(friends_names[2]);
console.log(friends_names[3]);

// 12-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log("Hello " + friends_names[0]);
console.log("Hello " + friends_names[1]);
console.log("Hello " + friends_names[2]);
console.log("Hello " + friends_names[3]);

// 13-Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var fav_mode:string [] = ["Honda 70", "Honda 125", "Yamaha YBR", "Toyota Crown"]
console.log("I would like to own a " + fav_mode[0]);
console.log("I would like to own a " + fav_mode[1]);
console.log("I would like to own a " + fav_mode[2]);
console.log("I would like to own a " + fav_mode[3]);
 
// 14-Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guest_list:string []= ["Allama Iqbal", "Salah-ud-Din Ayubi", "Quaid-e-Azam"]
console.log("AOA " + guest_list[0] + ", you are invited on dinner, tonight.");
console.log("AOA " + guest_list[1] + ", you are invited on dinner, tonight.");
console.log("AOA " + guest_list[2] + ", you are invited on dinner, tonight.");
 
// 15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

guest_list.splice(3,0,"Imran Khan")
console.log("AOA " + guest_list[3] + ", you are invited on dinner, tonight.");

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log("Due to political imprisonment " + guest_list[3] + " cannot come to dinner. But we hope that he will bailed out and change the fate of Pakistan InshaAllah");

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guest_list.splice(3,1,"Zia Khan")
console.log(guest_list);

// • Print a second set of invitation messages, one for each person who is still in your list.

console.log("AOA " + guest_list[0] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[1] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[2] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[3] + ", you are invited on dinner, tonight. I hope that you will be on time.");

// 16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

guest_list.splice(4,0,"Naveed Sarwar", "Maulana Bashir Farooq", "Zeeshan Usmani")
console.log(guest_list);

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log( "AOA " + guest_list[0] + " I am glad to inform you that I've got a bigger table for dinner.");
console.log( "AOA " + guest_list[1] + " I am glad to inform you that I've got a bigger table for dinner.");
console.log( "AOA " + guest_list[2] + " I am glad to inform you that I've got a bigger table for dinner.");
console.log( "AOA " + guest_list[3] + " I am glad to inform you that I've got a bigger table for dinner.");
console.log( "AOA " + guest_list[4] + " I am glad to inform you that I've got a bigger table for dinner.");
console.log( "AOA " + guest_list[5] + " I am glad to inform you that I've got a bigger table for dinner.");
console.log( "AOA " + guest_list[6] + " I am glad to inform you that I've got a bigger table for dinner.");

// • Add one new guest to the beginning of your array.

guest_list.splice(0,0,"Adeel Imtiaz");
console.log(guest_list);

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

guest_list.splice(5,0,"Zafar Shahid");
guest_list.push("Rizwan Ghaffar");
console.log(guest_list);
console.log("AOA " + guest_list[0] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[1] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[2] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[3] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[4] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[5] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[6] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[7] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[8] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[9] + ", you are invited on dinner, tonight. I hope that you will be on time.");

// 17-Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("I can only invite 2 people at Dinner.");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log("Sorry I cannot invite you at Dinner." + guest_list[9]);
guest_list.pop();
console.log("Sorry I cannot invite you at Dinner." + guest_list[8]);
guest_list.pop();
console.log("Sorry I cannot invite you at Dinner." + guest_list[7]);
guest_list.pop();
console.log("Sorry I cannot invite you at Dinner." + guest_list[6]);
guest_list.pop();
console.log("Sorry I cannot invite you at Dinner." + guest_list[5]);
guest_list.pop();
console.log("Sorry I cannot invite you at Dinner." + guest_list[4]);
guest_list.pop();
console.log("Sorry I cannot invite you at Dinner." + guest_list[3]);
guest_list.pop();
console.log("Sorry I cannot invite you at Dinner." + guest_list[2]);
guest_list.pop();

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log("AOA " + guest_list[0] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[1] + ", you are invited on dinner, tonight. I hope that you will be on time.");

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guest_list.pop();
guest_list.pop();
console.log(guest_list);

// 18-Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

var fav_places:string[] = ["Silicon Valley", "Norway", "USA", "Madina", "Italy"]
var copy_fav_places:string[] = [...fav_places]
// • Print your array in its original order.

console.log(fav_places);

// • Print your array in alphabetical order without modifying the actual list.

 copy_fav_places.sort();
console.log(copy_fav_places);

// • Show that your array is still in its original order by printing it.

console.log(fav_places);

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log(copy_fav_places.reverse());

// • Show that your array is still in its original order by printing it again.

console.log(fav_places);

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log(copy_fav_places.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(copy_fav_places.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log(copy_fav_places.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log(copy_fav_places.sort());

// 19-Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("AOA " + guest_list[0] + ", you are invited on dinner, tonight. I hope that you will be on time.");
console.log("AOA " + guest_list[1] + ", you are invited on dinner, tonight. I hope that you will be on time.");

// 20-Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

var some_thing:string[] = ["K2", "Ravi", "Italy", "Norway", "Milan", "Greensboro", "Hebrew"];
for (let nameOfSomeThing of some_thing){
    console.log(" - ", nameOfSomeThing);
}

// 21-They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// array of record of employees

let employees_ = [
    {
        name: "Abdul",
        post: "Director",
        age: 22
    },
    {
        name: "Hamza",
        post: "Project Manager",
        age: 23
    },
    {
        name: "Farhan",
        post: "HRM",
        age: 26
    },
    {
        name: "Abdullah",
        post: "CEO",
        age: 34
    },
    {
        name: "Ali",
        post: "Developer",
        age: 26
    }
]

console.log("List of Employees with their information:");
for (const emp of employees_) {
    console.log(`Name: ${emp.name}`);
    console.log(`Age: ${emp.age}`);
    console.log(`Post: ${emp.post}`);
    console.log("-----");
}
// 22-Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let _numbers:number [] = [11,22,33,44,55,66,77,]
let errorNumber = _numbers[9]; //This will cause an error in program
console.log(errorNumber); // undefined is printed
console.log(_numbers);

// 23-Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')

let myName:string = "Abdul";
let yourName:string = "Usman";
console.log("Is my name == your name, I Predict False.");
console.log(myName == yourName);

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log("Is my name != your name, I Predict True.");
console.log(myName != yourName);

console.log("Is my name > your name, I Predict False.");
console.log(myName > yourName);

console.log("Is my name < your name, I Predict False.")
console.log(myName < yourName);

console.log("Is my name >= your name, I Predict False.");
console.log(myName >= yourName);

console.log("Is my name <= your name, I Predict False.");
console.log(myName <= yourName);

// 24-More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// 25-Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

let alien_color:string = "green";
if (alien_color == "green") {
    console.log("Player just earned 5 points.");
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// 26-Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if (alien_color == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

if (alien_color!= "green") {
    console.log("Player just earned 10 points.");
}

// • Write one version of this program that runs the if block and another that runs the else block.

// if statement true
if (alien_color == "green") {
    console.log("Alien color is green.");
} else {
    console.log("Not green color");
}

// else statement true
if (alien_color != "green") {
    console.log("Alien color is green.");
} else {
    console.log("Not green color");
}

// 27-Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

if (alien_color == "green") {
    console.log("Player earned 5 points");
    
} else if (alien_color == "yellow") {
    console.log("Player earned 10 points.");
    
} else if(alien_color == "red"){
    console.log("Player earned 15 points");
    
}{
    
}

// 28-Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

var _age:number = 21;

if (_age < 2) {
    console.log("Person is baby.");
    
} else if(_age >= 2 && _age < 4){
    console.log("Person is a Toddler.");
    
}else if (_age >= 4 && _age < 13 ) {
    console.log("Person is a kid.");
    
}else if (_age >= 13 && _age < 20) {
    console.log("Person is a Teenager.");
    
}else if (_age >= 20 && _age < 65) {
    console.log("Person is Adult.");
    
}else if (_age >= 65) {
    console.log("Person is Elder.");
    
}

// 29-Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

var fav_fruits:string[] = ["Apple", "Mango", "Strawberry", "Peach", "Orange"] 

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

fav_fruits.map((fruit) => {

    if (fruit == "Apple") {
        console.log("I like Apples!");
    } else  if (fruit == "Mango") {
        console.log("I like Mangoes!");
        
    } else if (fruit == "Strawberry") {
        console.log("I like Strawberries!");
        
    } else if (fruit == "Peach") {
        console.log("I like Peaches!");
        
    }else if (fruit == "Orange") {
        console.log("I like Oranges!");
        
    }else {
        console.log(" I dont like this fruit!");
        
    }

})

// 30-Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

var user_name:string[] = ["Admin", "Abdul", "Abdullah", "Farhan", "Hamza"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

for (let index = 0; index < user_name.length; index++) {
    if (user_name[index] == "Admin") {
       console.log("Hello " , user_name[index], "Would you like to see a status report?");
    }else {
        console.log("Hello" , user_name[index] , "Thank You for logging in again.");
        
    }
    
}

// 31-No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

var no_users:string[] = ["Abdul", "Farhan", "Hamza", "Abdullah", "Usman"];

// • If the list is empty, print the message We need to find some users!

while (no_users.length > 0) {
    no_users.pop();
}

// • Remove all of the usernames from your array, and make sure the correct message is printed.

if (no_users.length == 0) {
    console.log("We need to find some users!");
    
}

// 32-Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

var current_users:string [] = ["Abdul", "Farhan", "Hamza", "Abdullah", "Usman"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

var new_users:string[] = ["Abdul", "Zohaib", "Farhan", "Hamza", "Muneel", "Abdullah", "Usman"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for (let index = 0; index < new_users.length; index++) {
    if (current_users.includes(new_users[index])) {
        console.log(new_users[index], "Sorry, the username is already in use.");
    }else {
        console.log(new_users[index] , "Username is available.");
        
    }
    
}

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// 33-Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

var ordinal_nums:number[] = [1,2,3,4,5,6,7,8,9];

// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

for (let index = 0; index < ordinal_nums.length; index++) {
    if (ordinal_nums[index] == 1) {
        console.log(ordinal_nums[index],"st");
        
    }else if (ordinal_nums[index] == 2) {
        console.log(ordinal_nums[index],"nd");
        
    }else if (ordinal_nums[index] == 3) {
        console.log(ordinal_nums[index],"rd");
        
    }else {
        console.log(ordinal_nums[index],"th");
        
    }
    
}

// 34-Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

var fav_pizza:string[] = ["Fajita", "Cheese Lover", "Mexican"];

for (let index = 0; index < fav_pizza.length; index++) {
    console.log(fav_pizza[index]);
     
}

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

var fav_pizza:string[] = ["Fajita", "Cheese Lover", "Mexican"];

for (let index = 0; index < fav_pizza.length; index++) {
    console.log("I like" ,fav_pizza[index], "Pizza.");
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven");

// 35-Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

var animals:string[] = ["Dolphin" , "Flying Fish", "Pterosaur"];

for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
}

var animals:string[] = ["Dolphin" , "Flying Fish", "Pterosaur"];

for (let index = 0; index < animals.length; index++) {
    console.log("A",animals[index], "is known for their ability to glide or fly through tha air or water.");
}

console.log("These animals are known for their ability to glide or fly through the air or water. Dolphins are highly skilled swimmers and can leap out of the water, resembling flight. Flying fish have specialized fins that allow them to glide above the water's surface. Pterosaurs were prehistoric reptiles that could fly.");


// 36-T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:number, message:string){
console.log("The size of shirt is ", size , "and the message printed on shirt is", message);
}

make_shirt(32,"Dreams without goals are just dreams.")
// 37-Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt2(size:string = "Large", message:string = "I Love Typescript."){
    console.log(`The size of shirt is ${size} and the message ptinted on shirt is ${message}`);
    
}

make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "PIAIC");


// 38-Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string, country:string = "Pakistan"){
    console.log(`${city} is a very beautiful city and is in ${country}.`);
    
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Swat");
describe_city("Silicon Valley", "USA")
// 39-City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string, country:string){
console.log('"' + city + " , " , country + '"');
}

city_country("Faisalabad","Pakistan");
city_country("Lahore","Pakistan");
city_country("Karachi","Pakistan");

// 40-Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name:string, album_title:string){
    const album1 = {
        title:"Bayaan",
        artist: "Yasir Khan",
        album: ["Din Dhalay", "Nahi Milta", "Teri Tasveer"]
    }
    if (artist_name == album1.artist && album_title == album1.title) {
        console.log(album1);
        
    }
}

make_album("Yasir Khan","Bayaan");

function albums(title:string,artist:string){
    const album2 = {
        title:"experience",
        artist: "Ludovico Einaudi",
        album: ["song1", "song2", "song3"]
    }
    const album3 = {
        title:"ijazat",
        artist: "Falak Shabbir",
        album: ["song1", "song2", "song3"]
    }
    const album4 = {
        title:"udaarian",
        artist: "Satinder Sartaj",
        album: ["song1", "song2", "song3"]
    }


if (title == album2.title && artist == album2.artist ) {
    console.log(album2);
    
}else if (title == album3.title && artist == album3.artist) {
    console.log(album3);
    
}else if (title == album4.title && artist == album4.artist) {
    console.log(album4);
    
}


}
albums("udaarian","Satinder Sartaj")
// 41-Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

var magicians_names:string[] = ["Asad","Ahmad","Farhan","Hamza"];
function show_magicians(magician:string[]){
for (let index = 0; index < magician.length; index++) {
    console.log(magician[index]);
    
    
}
}

show_magicians(magicians_names);
// 42-Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magicians_names:string[] = ["Asad", "Ahmad","Farhan", "Hamza"];
function make_great(magician:string){
    for (let index = 0; index < magicians_names.length; index++) {
        console.log(magician + magicians_names[index]);
        
        
    }
}
make_great("Great");

// 43-Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magicians_names:string[] = ["Asad", "Ali", "Farhan", "Hamza"];
function make_great1(magician: string="Great") {
    console.log("magician name with great ");
    for (let i = 0; i < magicians_names.length; i++) {
        console.log(magician + magicians_names[i]);
    }
    console.log("origional magician name");
    var copy_magician_name: string[] = [...magicians_names];
    console.log(copy_magician_name);
}

make_great1()

// 44-Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function sandwich_order(items:string[]){
    console.log("*** Summary of your order ***");
    for(let i=0;i<items.length;i++){
        console.log(items[i]);        
    }    
}

sandwich_order(["Sandwich1","potato Sandwich","Chicken Sandwich"])
sandwich_order(["Simple_Sandwich","egg_Sandwich","Egg Potato_Sandwich"])
sandwich_order(["SANDWICH111","SANDWICH222","SANDWICH333"])

// 45-Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. 

function Cars1(company: string = "Honda", model: number = 2024, ...args: any[]) {
    let car_object: any = {
        Company: company,
        Model: model,
    };

    
    for (let i = 0; i < args.length; i += 2) {
        const name: string = args[i];
        const value: any = args[i + 1];
        car_object[name] = value;
    }

    console.log(car_object);
}


Cars1("Suzuki", 2020, "Color", "Grey", "Price", 2500000, "Engine", "1000CC");
Cars1("Honda", 2023, "Color", "Blue");
Cars1("Audi", 2024, "Color", "Silver", "OptionalFeature", "Sunroof");