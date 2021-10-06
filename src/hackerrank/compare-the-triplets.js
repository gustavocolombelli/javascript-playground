const compareTheTriplets = (aliceArray = [], bobArray = [])=>{

    let result = [0,0];

    if(aliceArray.length !== bobArray.length)
        return false;

    for(let i = 0 ; i < aliceArray.length ; i++){

        if(aliceArray[i] > bobArray[i]){
            result[0]++;
        }

        else if(aliceArray[i] < bobArray[i]){
            result[1]++;
        }
    }

    
    return result;
}

module.exports = { compareTheTriplets }