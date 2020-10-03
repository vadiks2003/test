let a = b = c = d = e = f = g = h = 0;
binumber = [a,b,c,d,e,f,g,h];
let thearray = "";
for(let i = 0; i<256; i++)
{
testnumber();
let whattotypein = binumber[0].toString() + binumber[1].toString() + binumber[2].toString() + binumber[3].toString() + binumber[4].toString() + binumber[5].toString() + binumber[6].toString() + binumber[7].toString() + " ";
binumber[7]++;
thearray += whattotypein;
}
console.log(thearray);
function testnumber()
{
for(let countbin = 8; countbin>=0;countbin--){
if(binumber[countbin] == 2)
{
binumber[countbin] = 0;
binumber[countbin-1]++;
}}}
