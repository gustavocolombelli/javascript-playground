const staircase = (stairCaseSize) =>{

    let stairCase = new String();

    if(stairCaseSize > 0 && stairCaseSize <=100){
        for(let i = 1 ; i <= stairCaseSize ; i++){
            console.log(' '.repeat(stairCaseSize-i) + '#'.repeat(i))
        }
    }
}

module.exports = { staircase };