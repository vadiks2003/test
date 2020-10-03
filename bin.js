// this whole is unoptimized, made it just so it would work. also yes i dont use tabs
let a = b = c = d = e = f = g = h = 0; // makes 8 variables 
binumber = [a,b,c,d,e,f,g,h]; // all these 8 variables get in the array. could try making them all in one line ig but idk it'd look weird
let thearray = ""; // a whole string with all the numbers. assigned "" so it wouldn't say "undefined" in the beggining
for(let i = 0; i<256; i++) 
{
testnumber(); // calls testnumber function which tests if a number is 2 and if it is makes it 0 and turns the number that's before it in the array to 1. checks every single 8 array value. also if you put it after 10th line its probably gonna contain 2's
let whattotypein = binumber[0].toString() + binumber[1].toString() + binumber[2].toString() + binumber[3].toString() + binumber[4].toString() + binumber[5].toString() + binumber[6].toString() + binumber[7].toString() + " "; // puts all array values into one string, so it wouldn't be "0 1 0 0", instead it'd be a string which is "0100". and a spacebar in the end.
binumber[7]++; // pluses the last number
thearray += whattotypein; // basically adding every number of the loop into "thearray" since "a" + "b" = "ab"
}
console.log(thearray); // shows the result in the console
function testnumber() 
{
for(let countbin = 8; countbin>=0;countbin--){ //commit test to every single 8 array digits
if(binumber[countbin] == 2)  //if a digit is 2 then commit stuff
{
binumber[countbin] = 0; // make 2 into 0
binumber[countbin-1]++; // turn array before it into 1
}}}
