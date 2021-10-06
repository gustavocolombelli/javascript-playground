export default (term) => {

    var result = 1;

    if(term == 0 || term == 1 ){
        
        return result;
        
    }

    for(let iterator = term ; iterator > 1 ; iterator--)
    {
        result *= iterator;
    }

    return result; 

}