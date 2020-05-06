/*eslint-env browser*/

//STEP 1
let name = prompt('Step 1 - What is your name?');
let nameLength = name.length;
alert('You have ' + nameLength + ' characters in your name');

//STEP 2
let name2 = prompt('Step 2 - What is your name?');
let pickNumber = prompt('Pick a number between 1 and ' + name2.length);
alert('The number ' + pickNumber + ' letter in your name is ' + name2[pickNumber - 1]);

//STEP 3
let first = prompt('Step 3 - What is your first name?');
let last = prompt('What is your last name?');
alert('Your full name is: ' + first + ' ' + last);

//STEP 4
let fox = "The quick brown fox jumps over the lazy dog";
    let text = function (store) {
        return store.trim().split(" ");
   };
   console.log(text(fox));
   let fox1 = text(fox);
   alert("Step 4 - The index of the word 'fox' is " + fox1.indexOf('fox'));

//STEP 5
let fox = "The quick brown fox jumps over the lazy fox";
let text2 = function (store) {
    return store.trim().split(" ");
};
console.log(text2(fox));
let fox2 = text2(fox);
alert("Step 5 - The index of the last instance of 'fox' is " + fox2.lastIndexOf('fox'));

//STEP 6
let fox = "The quick brown fox jumps over the lazy dog";
let yourName = prompt('Step 6 - What is your full name?');
let replace = fox.replace("the lazy dog", yourName);
alert("Step 6 - " + replace);

//STEP 7
let fox7 = "The quick brown fox jumps over the lazy dog";
let userWord = prompt('Enter a word from: ' + fox7);

let search = function (string) {
    return string.trim().split(" ");
};
console.log(search(fox7));
let phrase1 = search(fox7);
alert("Step 7 - You can find the word " +  userWord + ' at the number ' + (phrase1.indexOf(userWord)+1) + ' position of the phrase ' + '"' + fox7 + '"');

//STEP 8
let old_string = fox7;
let new_string = old_string.substr(-12).toUpperCase();
alert("Step 8 - " + new_string);

//STEP 9
let fox9 = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
let trimmed = fox9.trim();

console.log(trimmed.toLowerCase());
alert('Step 9 - ' + trimmed.toLowerCase());

//STEP 10
let fox10 = 'the quick brown fox jumps over the lazy dog';
let capitalize = fox10.toLowerCase();
    alert("Step 10 - " + fox10.charAt(0).toUpperCase() + fox10.slice(1));