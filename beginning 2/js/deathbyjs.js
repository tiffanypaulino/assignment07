/*eslint-env browser*/

//STEP 1
String.prototype.reverse = function () {
    "use strict";
    var reverse = "", i;
    for (i = this.length - 1; 1>= 0; i -= 1) {
        reverse += this.charAt(i);
    }
    return reverse;
};
var message = "LittleBrother";
window.console.log(message.reverse());

// function alphabet_order(str) {
//     return str.split('').sort().join('');
// }
// console.log(alphabet_order("littlebrother"));

//STEP 2
capitalize_Words 
function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('pure skin lounge'));

//STEP 3
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Kuumomimakamae"));

//STEP 4
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

//STEP 5
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Argentina", "Dominican Republic", "United States of America"]));
