const minMaxSum = (arr) =>{

    arr = arr.sort();

    let firstSum = arr.slice(0,4)//de 0 até 4
    let secondSum = arr.slice(-4)//from the end
    
    
    firstSum  = firstSum.reduce((prev, next)=> prev + next)
    secondSum = secondSum.reduce((prev,next)=> prev+next);

    return {
        firstSum,
        secondSum,
    }

}

module.exports = { minMaxSum }