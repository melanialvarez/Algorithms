/*

here are a row of n houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.

3:29
3:50


Get first house A[0]
for each value of first house
    call to add them with the value of the next house (but only the ones with different color) indexThisHouse != indexNextHouse
    cb with currentPrice, currentHouseIndex (color), reminingHouses


    Example
    [[1,2,3],[3,2,3], [1,1,1]]

    firstHouse = [1,2,3]
    1 currentColorIndex = 0;
    then call with other indexes of second house
        [.3. , 2,3] ignore 3

        1 + 2 = 3 currentColorIndex = 1

        [1, .1. ,1] ignore 1
            3 + 1 cci=0
                4
                cb() // if no reminingHomes I found a price, save this as a potential solution

            3 + 1 cci = 2
                4

        1 + 3 = 4 currentColorIndex = 2

 */


/*
Code with global var


var lowestCost = undefined;

function recursive(currentCost, currentColorIndex, reminingHouses){//1, 0 , [3,2,3], [1,1,1]
    // console.log(currentCost, currentColorIndex, reminingHouses);

    if(reminingHouses.length === 0){
        // console.log(currentCost);
        //found final price;
        if(lowestCost === undefined) lowestCost = currentCost;
        else {
            lowestCost = Math.min(lowestCost, currentCost);
        }
        return;
    }

    var nextHouse = reminingHouses[0];//[3,2,3]

    for(var i=0; i<nextHouse.length; i++){
        if(i != currentColorIndex){ //If the color is different
            // console.log('adding ', currentCost,'+', nextHouse[i]);
            recursive(currentCost + nextHouse[i], i, reminingHouses.slice(1));// 3, 1, [1,1,1]
        }
    }
}

function main(A){
    var firstHouse = A[0];//[1,2,3]
    for(var i=0; i<firstHouse.length; i++){
        // console.log('***');
        recursive(firstHouse[i], i, A.slice(1));//1, 0 , [3,2,3], [1,1,1]
    }

}

var houses = [[1,2,3],[3,1,3], [1,1,1]];
main(houses);
console.log(lowestCost);



 */

function recursive(currentCost, currentColorIndex, reminingHouses){//1, 0 , [3,2,3], [1,1,1]
    // console.log(currentCost, currentColorIndex, reminingHouses);

    if(reminingHouses.length === 0){
        // if(lowestCost === undefined) lowestCost = currentCost;
        // else {
        //     lowestCost = Math.min(lowestCost, currentCost);
        // }
        return currentCost;
    }

    var nextHouse = reminingHouses[0];//[3,2,3]

    var lowestCostSoFar = undefined;

    for(var i=0; i<nextHouse.length; i++){
        if(i != currentColorIndex){ //If the color is different
            // console.log('adding ', currentCost,'+', nextHouse[i]);
            var currentCostC = recursive(currentCost + nextHouse[i], i, reminingHouses.slice(1));// 3, 1, [1,1,1]
            if(lowestCostSoFar === undefined) lowestCostSoFar = currentCostC;
            else lowestCostSoFar = Math.min(lowestCostSoFar, currentCostC);
        }
    }
    return lowestCostSoFar;
}

function main(A){
    var firstHouse = A[0];//[1,2,3]
    var lowestCostSoFar = undefined;
    for(var i=0; i<firstHouse.length; i++){
        // console.log('***');
        var currentCostC =  recursive(firstHouse[i], i, A.slice(1));//1, 0 , [3,2,3], [1,1,1]
        if(lowestCostSoFar === undefined) lowestCostSoFar = currentCostC;
        else lowestCostSoFar = Math.min(lowestCostSoFar, currentCostC);
    }
    return lowestCostSoFar;

}

var houses = [[1,2,3],[3,2,3], [2,1,2]];
console.log(main(houses));
