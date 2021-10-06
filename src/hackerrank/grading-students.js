const gradingStudents = (gradingArray = []) =>{

    let mod5;
    let gradingsResult = gradingArray.map((grade) =>{
        if(grade>=38){
            mod5 = grade % 5;
            if(mod5 >=3){
                return grade + (5 - mod5);
            }
        }
        return grade;    
    })

    return gradingsResult;
}

module.exports = { gradingStudents }