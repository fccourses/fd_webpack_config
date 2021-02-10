import Component from './Component';
import mathConst, * as MyMath from './math';

console.time();
console.log(MyMath.pow(180,50))
console.timeEnd();

console.time();
console.log(MyMath.pow(180, 50));
console.timeEnd();
