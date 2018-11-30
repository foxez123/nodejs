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

2. reduce for string return
