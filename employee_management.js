
//Task 1

class Employee {
     constructor(name, position, salary, department) {
       this.name = name;
      this.position = position;
     this.salary = salary;
     this.department = department
  }
  getDetails(){
    console.log(`${this.name} position is ${this.position} and their salary
        is ${this.salary}`)
  }
    
}