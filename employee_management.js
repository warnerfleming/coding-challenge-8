
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

//Task 2
class Department {
    constructor(name, employees) {
      this.name = name;
     this.employees = []
 }
 addEmployee(employee){
this.employees.push(employee)
 }
 getDepartmentSalary(){
    department.reduce((total, salary) => total + salary, 0)
 }
}

const engineering = new Department("Engineering");

const marketing = new Department("Marketing");