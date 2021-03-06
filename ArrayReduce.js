1. reduce example for array return

// arr.reduce(callback[, initialValue])
// callback: function(accumulator, currentValue, currentIndexOptional)
let arr = [];
arr[0] = {myChar: 'A'};
arr[1] = {myChar: 'B'};
arr[2] = {myChar: 'C'};
console.log( "Target array=" +  util.inspect(arr) );
arr.reduce(
    (beforeAcc, val, path) => {   // <== callback function
        console.log("============================================================");
        console.log("beforeAcc=" + util.inspect(beforeAcc));
        console.log("value=" + util.inspect(val));
        console.log("path=" + path);
        let afterAcc = beforeAcc.concat(val);
        console.log("return=" + util.inspect(afterAcc)); // 리턴할 결과 값 (이것도 배열임)

        return afterAcc;
    },
    []  // <== initailValue
);

Target array=[ { myChar: 'A' }, { myChar: 'B' }, { myChar: 'C' } ]
============================================================
beforeAcc=[]
value={ myChar: 'A' }
path=0
return=[ { myChar: 'A' } ]
============================================================
beforeAcc=[ { myChar: 'A' } ]
value={ myChar: 'B' }
path=1
return=[ { myChar: 'A' }, { myChar: 'B' } ]
============================================================
beforeAcc=[ { myChar: 'A' }, { myChar: 'B' } ]
value={ myChar: 'C' }
path=2
return=[ { myChar: 'A' }, { myChar: 'B' }, { myChar: 'C' } ]

2. reduce example (count the animals)
let arr = []
arr[0] = "Tiger";
arr[1] = "Lion";
arr[2] = "Lion";
arr[3] = "Cat";
arr[4] = "Tiger";
arr[5] = "Lion";

console.log( "Source array=" +  util.inspect(arr) );  // Source array=[ 'Tiger', 'Lion', 'Lion', 'Cat', 'Tiger', 'Lion' ]

let result = arr.reduce(
    (acc, val) => {   //
        if( val in acc ) {
            acc[val]++;
        } else {
            acc[val] = 1;
        }
        return acc;
    },
    {}  // initail Value
);

console.log(result);   // { Tiger: 2, Lion: 3, Cat: 1 }
