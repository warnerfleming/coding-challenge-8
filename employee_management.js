
//Task 1

class Employee {
     constructor(name, position, salary, department) {
       this.name = name;
      this.salary = salary;
     this.position = position;
     this.department = department
  }
  getDetails(){
    console.log(`${this.name}s position is ${this.position} and their salary
        is ${this.salary}`)
  }
    
}

const bob = new Employee("Bob", 75000, "Designer", "Marketing");


bob.getDetails()


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
 calculateTotalSalaryWithBonus(){
   let totalSalary = 0
   this.employees.forEach(employee=>
    totalSalary += employee.salary
   )
   if (this.employee instanceof Manager)
    totalSalary += Manager.bonus
 }
}

const engineering = new Department("Engineering");

const marketing = new Department("Marketing");


//Task 3

class Manager extends Employee(){
    constructor(name, position, salary, department,bonus){
    super(name, position, salary, department)
    this.bonus = bonus
}
getDetails(){
    console.log(`${this.name} position is ${this.position} and their salary
        is ${this.salary} with a bonus of ${this.bonus}`)
}}

//Task 4
//In Depertment class
