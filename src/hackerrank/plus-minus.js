const plusMinus = (array = []) =>{

    let positives = 0, negatives = 0, zeros = 0;
    
    if(array.length > 0 && array.length <= 100)
    {
        array.map((element)=>{
            if( element < 0 )
            {
                negatives++;
            }
            else if( element > 0 )
            {
                positives++
            }
            else if( element == 0 )
            {
                zeros++
            }
        })

        negatives = negatives/array.length || 0;
        positives = positives/array.length || 0;
        zeros = zeros/array.length || 0;

        return{
            negatives,
            positives,
            zeros,
        }



    }


}

module.exports = {plusMinus}