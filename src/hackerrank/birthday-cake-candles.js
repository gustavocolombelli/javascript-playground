const birthdayCakeCandles = (arr) =>{
    
    let higherNumber = Math.max.apply(null, arr);  
    
    return (arr.filter(curr=> higherNumber == curr)).length;


}

module.exports = { birthdayCakeCandles };

