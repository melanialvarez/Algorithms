/*
 Given a list of people with their birth and death years. Find the year with the highest population.

 [{1992, 2000}, {2000, 2010}, {1999, 2020}, {1900, 1992}]

 {1, 10}, {9, 20}, {19, 25}, {3, 10}


 Ans = 3 at 2000

 Questions, if the person died at specific year, that means he exists that year?

 take the first person birth year
 compare it to the births of all other persons
    if currentBirthyear >= otherPersonBirthYear
    check if he is still alive: if otherPersonDeathYear <= currentBirthyear
        Found one alive! add to counter

Edge cases:
empty array
one person
no coincidence in dates

//[{1,5},{6, 7}]

 5:26
 5:53

 */

//Todo: add HT to store already checked years, if so, drop it
function f(P) {//{1, 10}, {9, 20}, {19, 25}, {3, 10}
    var maxAlivePeope = 0;
    var currentYear = P.length? P[0].birth : undefined;

    for(var i=0; i<P.length; i++){//i=1 i<4
        var currentPerson = P[i];//{9, 20}
        var currentPersonBirth = currentPerson.birth;//9
        var currentPersonDeath = currentPerson.death;//9
        var currentAlivePersons = 1;

        for(var j=0; j<P.length; j++){//i=0 i<4
            if(j!= i){//not current person
                var otherPerson = P[j]; //{3, 10}
                //9 >= 3 && 10 > 9
                if(currentPersonBirth >= otherPerson.birth && otherPerson.death > currentPersonBirth){//He is still alive at that year
                    currentAlivePersons++;//3
                }
            }
        }

        if(currentAlivePersons > maxAlivePeope){
            maxAlivePeope = currentAlivePersons;
            currentYear = currentPersonBirth;
        }

    }

    return currentYear;
}

var people = [{birth: 1992, death: 2000}, {birth: 1992, death: 1999}, {birth: 1900, death: 2001}, {birth: 2000, death: 2006}]
console.log(f(people));