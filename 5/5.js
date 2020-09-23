var number=(n)=>(x)=>(x instanceof Array)?x[0](n,x[1]):n;
var op=(f)=>(x)=>[f,x];
var minus=op((x,y)=>x-y),
    plus=op((x,y)=>x+y),
    times=op((x,y)=>x*y),
    dividedBy=op((x,y)=>parseFloat(x)/y);
var one=number(1),two=number(2),three=number(3),
    four=number(4),five=number(5),six=number(6),
    seven=number(7),eight=number(8),nine=number(9);
console.log(five(minus(four()))); // 1
console.log(two(times(two(plus(seven()))))); // 18
console.log(eight(dividedBy(four()))); // 2