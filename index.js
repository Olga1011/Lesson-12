var massive = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
massive.push(-2);
alert(massive);
massive.unshift(1000);
massive.push('Last array elemnt');
alert(massive);
massive.splice(3,3);
alert(massive);
var integer = massive.filter(function(item) {
    return (typeof item === "number");
  });
alert(integer);
var power = integer.map(function(item) {
    return Math.pow(item, 2);
});
alert(power);
console.log( alert (Math.max.apply(null, power)));


