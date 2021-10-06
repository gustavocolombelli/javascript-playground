const { gradingStudents } = require('./grading-students');

test('gradingStudents of [73,67,38,33] should be [75,67,40,33]', ()=>{
    expect(gradingStudents([73,67,38,33])).toEqual([75,67,40,33]);
})
