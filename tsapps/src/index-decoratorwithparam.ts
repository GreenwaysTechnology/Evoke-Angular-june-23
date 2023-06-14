//how to write decorators

//target is variable going to hold the reference of Object.

// function Course(target: any) {
//     //decorator logic
//     Object.defineProperty(target.prototype, 'subject', { value: 'Angular' })
// }


function Course(courseInfo:any) {
    //decorator logic
    return function(target:any){
        Object.defineProperty(target.prototype, 'subject', { value: courseInfo })
    }
}

@Course({ name: 'Java', duration: '40 hrs' })
class Student {
    constructor(public name: string = '') { }
}
let student = new Student('Subramanian') as any
console.log(`Student ${student.name} is learning ${student.subject.name} and duration ${student.subject.duration}`)
