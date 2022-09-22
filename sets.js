// -u SET1 SET2 or --union SET1 SET2
// -i SET1 SET2 or --intersection SET1 SET2
// -d SET1 SET2 or --difference SET1 SET2
// -h or --help

// Union - Duplicate first set then compare that with second set. If there are duplicates, don't add to array.
// Intersection - Compare elements in sets and if true, add to array.
// Difference - Compare both and find what is not in the second set and add to array.

var setOne = new Array(1,2,3,5);
var setTwo = new Array(3,4,5,6,7);

function setUnion(_setOne, _setTwo) {
    var finSet = new Array();
    finSet = _setOne.concat(_setTwo);

    for (let i = 0; i < _setOne.length; i++) {
        for (let j = _setOne.length; j < finSet.length; j++) {
            if (finSet[i] == finSet[j]) {
                finSet.splice(j, 1)
            }
        }
    }
    console.log(...finSet);
}

setUnion(setOne, setTwo);