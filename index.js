var path = require('path');
var fm = require('./dist/fm.js');
let arrayMath = new fm(20,35);
let array1 = [3,12,5,78,60,41];
let a = arrayMath.add(4,9);
console.log(a);
let b = arrayMath.getMaxMin(array1);
console.log(b);
let c = "Default add back is " + arrayMath.addBack;
console.log(c);
module.exports = fm;