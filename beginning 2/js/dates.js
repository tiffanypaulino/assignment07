/*eslint-env browser*/

//STEP 1
let mth = prompt('Step 1 - Pick a month: 1 - 12');
let getDaysInMonth = function(month,year) {
    if(mth === 2){
        return ('28 days in Feb but every 4 years this month has 29 days');
    } else {
        return new Date(year, mth, 0).getDate();
    }
 };
  console.log(getDaysInMonth(1, 1975));

//STEP 2
let year = prompt("Step 1 - Enter a year ", "xxxx");
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let days;

for (let i = 0; i < 12; i++) {
    days = new Date(year, [i + 1], 0).getDate();
    console.log("In the year, " + year + ", there are " + days + " days in " + month[i])
}

//STEP 3
let date = prompt('Step 3 - Enter a date');
let weekend =  function(date){
    let data = new Date(date);

    if(data.getDay() === 6 || data.getDay() === 0)
       {
        return "weekend";
        } else {
        return "weekday";
        }
};
console.log("Step 3 " + date + " is a " + weekend(date));

//STEP 4
let day =  function() {
    let yesterday = new Date();
        yesterday.setDate(yesterday.getDate()-1);
        return yesterday.toLocaleString("default", { weekday : "long"});
};
console.log("Step 4 - Yesterday was " + day());

//STEP 5
const current = new Date();
todayIs = prompt("Today is", current);
let dayofweek = new Date(todayIs);
console.log("Step 5: " + dayofweek.toLocaleString('default', { weekday: 'narrow' }));
