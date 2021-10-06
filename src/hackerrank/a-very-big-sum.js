const { simpleArraySum } = require('./simple-array-sum')

const aVeryBigSum = (inputElements = []) =>{

    if(!Array.isArray(inputElements))
        return undefined;

    return simpleArraySum(inputElements);
}

module.exports  = { aVeryBigSum }