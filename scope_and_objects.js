let globalCount = 0;

function localScope(){
    let localCount = 12;
    console.log(`Local Scope: ${localCount}`);
    console.log(`Global Scope: ${globalCount}`);
}
localScope();

function modifyScopes(){
    globalCount += 2;
    console.log(`Global Scope: ${globalCount}`);

    localScope += 2;
    // console.log(`Local Scope: ${localCount}`);
}
modifyScopes();

function student(name, age, group){
    this.name = name,
    this.age = age,
    this.group = group
}
const student1 = new student("Jane Doe", 25, "A");
const student2 = new student("John Doe", 21, "B");

let details = {
    university: "Stellenbosch University",
    location: {
        city: "Cape Town",
        area: "Stellenbosch"
    },
    student: [student1, student2]
};

// console.log(details.student);
details.student.forEach(p => console.log(`Student: ${p.name}`));
console.log(`Location: ${details.location.area}, ${details.location.city}`);

