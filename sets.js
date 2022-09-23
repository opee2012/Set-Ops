// -u SET1 SET2 or --union SET1 SET2
// -i SET1 SET2 or --intersection SET1 SET2
// -d SET1 SET2 or --difference SET1 SET2
// -h or --help

// Union - Duplicate first set then compare that with second set. If there are duplicates, don't add to array.
function setUnion() {
    var unionSet = new Array();
    unionSet = setOne.concat(setTwo);

    for (let i = 0; i < setOne.length; i++) {
        for (let j = setOne.length; j < unionSet.length; j++) {
            if (unionSet[i] == unionSet[j]) {
                unionSet.splice(j, 1);
            }
        }
    }
    unionSet.sort();
    console.log(...unionSet);
}

// Intersection - Compare elements in sets and if true, add to array.
function setIntersection() {
    var interSet = new Array();

    for (let i = 0; i < setOne.length; i++) {
        for (let j = 0; j < setTwo.length; j++) {
            if (setOne[i] == setTwo[j]) {
                interSet.push(setTwo[j]);
            }
        }
    }
    interSet.sort();
    console.log(...interSet);
}

// Difference - Compare both and find what is not in the second set and add to array.
function setDifference() {
    var diffSet = new Array();
    diffSet = setOne;

    for (let i = 0; i < setOne.length; i++) {
        for (let j = 0; j < setTwo.length; j++) {
            if (setOne[i] == setTwo[j]) {
                diffSet.splice(i, 1);
            }
        }
    }
    diffSet.sort();
    console.log(...diffSet);
}

var setOne = new Array(1,2,3,5);
var setTwo = new Array(3,4,5,6,7);

setUnion();
setIntersection();
setDifference();