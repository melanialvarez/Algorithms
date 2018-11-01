/*
The edit distance between two strings refers to the minimum number of character
insertions, deletions, and substitutions required to change one string to the other.
For example, the edit distance between “kitten” and “sitting” is three:
substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

7:28
7:53

loop two strings and compare letters
if they are equal
    doesn't matter, continue
else
    compute tree possibilities and cb


kitten
sitting

 */

function cb(s1, s2, i1, i2) {
    if(!i1 && !i2) return 0;
    if(!i1 || !i2) return i1 || i2;

    if(s1[i1] === s2[i2]){
        return cb(s1, s2, i1-1, i2-1);
    } else {
        //other tree possibilities
        return 1 + Math.min(
            cb(s1, s2, i1, i2-1),//insert
            cb(s1, s2, i1-1, i2),//remove
            cb(s1, s2, i1-1, i2-1)//replace
        );
    }

}

function main() {
    var s1 = "geek";
    var s2= "geseksdss";
    console.log(cb(s1, s2, s1.length, s2.length));
}

main();