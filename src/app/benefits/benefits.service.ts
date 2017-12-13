import { Injectable } from '@angular/core';
import { IPerson } from './interfaces/iperson.interface';
import { Dependent } from './dependents/dependent.model';
import { Employee } from './employees/employee.model';
import { Constants } from './constants';

@Injectable()
export class BenefitsService {

  private employees: Array<Employee> = [];
  
  constructor() {

  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(name: string) {
    var employee = new Employee(name, Constants.EMPLOYEE_SALARY_PER_PAYPERIOD);
    this.employees.push(employee);    
  }

  deleteEmployee(employee: Employee) {
    var index = this.employees.indexOf(employee);
    if (index >= 0) {
      this.employees.splice(index,1);
    }
    else {
      throw "Employee not found!";
    }
  }

  addDependent(employee: Employee, name: string) {
    var index = this.employees.indexOf(employee);
    if (index >= 0) {
      var dependent = new Dependent(name);
      this.employees[index].dependents.push(dependent);
    }
    else {
      throw "Employee not found!";
    }
  }    
  
  deleteDependent(employee: Employee, dependent: Dependent) {
    var index = employee.dependents.indexOf(dependent);
    if (index >= 0) {
      employee.dependents.splice(index,1);
    }
    else {
      throw "Dependent not found!";
    }
  }

  getTotalAnnualBenefits(): number {
    let annualBenefitTotals: number = 0;

    this.employees.forEach((employee) => {         
      annualBenefitTotals += employee.benefits;

      employee.dependents.forEach((dependent) => {
        annualBenefitTotals += dependent.benefits;
      });
    });

    return annualBenefitTotals;
  }

  getTotalEmployeesAndDependents(): number {
    let totalPeople: number = this.employees.length;

    this.employees.forEach((employee) => {         
      totalPeople += employee.dependents.length;
    });

    return totalPeople;
  }

  getTotalAnnualSalaries(): number {
    let annualSalaries: number = 0;

    this.employees.forEach((employee) => {         
      annualSalaries += (employee.salaryPerPeriod * Constants.ANNUAL_PAYPERIODS);
    });

    return annualSalaries;
  }

}
