1. object => JSON => Buffer => JSON => object 로 변경

let beforeMsg = { type: 'TEST', num: 1 };
let beforeJSON = JSON.stringify(beforeMsg);
let msgBuffer = new Buffer(beforeJSON);
let afterJSON = msgBuffer.toString();
let afterMsg = JSON.parse(afterJSON);

console.log(beforeMsg);     // { type: 'TEST', num: 1 }
console.log(beforeJSON);    // {"type":"TEST","num":1} 
console.log(msgBuffer);     // <Buffer 7b 22 74 79 70 65 22 3a 22 54 45 53 54 22 2c 22 6e 75 6d 22 3a 31 7d>
console.log(afterJSON);     // {"type":"TEST","num":1}
console.log(afterMsg);      // { type: 'TEST', num: 1 }
console.log(afterMsg.type); // TEST
console.log(afterMsg.num);  // 1


2. object => Buffer 시 오류 발생
let beforeMsg = { type: 'TEST', num: 1 };
let msgBuffer = new Buffer(beforeMsg);

buffer.js:202
  throw new TypeError(kFromErrorMsg);
  ^
TypeError: First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.
    at Function.Buffer.from (buffer.js:202:9)


3. Buffer를 이용한 base64 변환
var buf1 = new Buffer('ABC');
console.log(buf);                    // <Buffer 41 42 43>
console.log(buf.toString());         // ABC
console.log(buf.toString('base64')); // QUJD
                                     // https://www.base64encode.org/ 에서 ABC를 base64 encoding하면 QUJD가 나옴

var buf2 = new Buffer('QUJD', 'base64');
console.log(buf2);                    // <Buffer 41 42 43>
console.log(buf2.toString());         // ABC
