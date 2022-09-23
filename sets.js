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
    console.log(unionSet);
    process.exit();
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
    console.log(interSet);
    process.exit();
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
    console.log(diffSet);
    process.exit();
}

function setHelp() {
    console.log(" ");
    process.exit();
}

var myArgs = process.argv.slice(2);

if (myArgs.length == 0) {
    console.error("Error, no arguments specified please use -h or --help for usage information.");
    process.exit();
}
if (myArgs.length == 1 || myArgs.length == 2) {
    console.error("Error, incorrect arguments specified please use -h or --help for usage information.");
    process.exit();
}

var A = myArgs[1];
var B = myArgs[2];
var setOne = A.split(",");
var setTwo = B.split(",");

//console.log(setTwo[0]);

if (myArgs[0] == '-u' || myArgs[0] == '--union') {
    setUnion();
}
if (myArgs[0] == '-i' || myArgs[0] == '--intersection') {
    setIntersection();
}
if (myArgs[0] == '-d' || myArgs[0] == '--difference') {
    setDifference();
}
if (myArgs[0] == '-h' || myArgs[0] == '--help') {
    setHelp();
}
