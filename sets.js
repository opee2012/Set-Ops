/*
    CSCI 390, Set Operations, Jacob Borth, 24 September 2022

    -u SET1 SET2, --union SET1 SET2
    Outputs a set in Array form of elements in Number form that are either in SET1 or SET2

    -i SET1 SET2, --intersection SET1 SET2
    Outputs a set in Array form of elements in Number form that are in *both* SET1 and SET2

    -d SET1 SET2, --difference SET1 SET2
    Outputs a set in Array form of elements in Number form that are in SET1 unless they are in SET2

    -h, --help
    Output a usage message and exit.
*/

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
}

function setHelp() {
    console.log("For union use -u or --union argument with two sets with each integer in the set separated by commas.\n\n\tex: node sets.js -u 1,2,3 3,4,5");
    console.log("\n\nFor intersection use -i or --intersection argument with two sets with each integer in the set separated by commas.\n\n\tex: node sets.js -i 1,2,3 3,4,5");
    console.log("\n\nFor difference use -d or --difference argument with two sets with each integer in the set separated by commas.\n\n\tex: node sets.js -d 1,2,3 3,4,5")
}

var myArgs = process.argv.slice(2);

if (myArgs[0] == '-h' || myArgs[0] == '--help') {
    setHelp();
    process.exit();
}
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
    console.log(unionSet);
    process.exit();
}
if (myArgs[0] == '-i' || myArgs[0] == '--intersection') {
    setIntersection();
    console.log(interSet);
    process.exit();
}
if (myArgs[0] == '-d' || myArgs[0] == '--difference') {
    setDifference();
    console.log(diffSet);
    process.exit();
}