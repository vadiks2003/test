// this whole is unoptimized, made it just so it would work. also yes i dont use tabs
binumber = [0,0,0,0,0,0,0,0]; // array of 8 digits
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
for(let countbin = 8; countbin>0;countbin--){ //commit test to every single 8 array digits
if(binumber[countbin] == 2)  //if a digit is 2 then commit stuff
{
binumber[countbin] = 0; // make 2 into 0
binumber[countbin-1]++; // adds 1 to the array value behind it
}}}

/* how this script works: 
1. we make array and "thearray" which is gonna contain a result in string.
  1.1 thearray is "" because if its nothing then console shows "undefined" in the beggining
2. a loop starts which does testsnumber 
  2.1 testnumber checks every array individually if its value 2
    2.1.1 if it is, then turns it to 0
    2.1.2 and turns the value which is behind it to +1
  2.2 loop 256 because 0000 0000 -> 1111 1111 which is 2^8=256
3. whattotypein combines every single value of array so it would look satisfying, because when i did just console.log(binumber) it showed every value with spacebar
  3.1 also i turn them to strings so "" would be used as spacebar instead of "" itself, since it used to be like that "1101 "" 1000" instead of "1101 1000"
  3.2 + "" in the end so there would be spaces between each whattotypein
4. the last binumber array value gets +1 and then testnumber proceeds to do it's magic. don't forget that it's [7] because arrays begin with 0
5. we add "whattotypein" into the thearray from the beggining. so basically "" + "00000000 " + "00000001 " = " 00000000 00000001 " untill it becomes full string
6. when the procedure is done 256 times, whattotypein has everything from 00000000 to 11111111 so we make console.log(thearray). DONE!!

notes:
1. don't testnumber() after console.log() if it's in the loop
2. doing console.log() in the loop shows every value from the new line
3. probably could do function inside the 256 loop
4. could do whattotypein in the loop instead of writing "binumber[i].tostring + ..." individually
*/
