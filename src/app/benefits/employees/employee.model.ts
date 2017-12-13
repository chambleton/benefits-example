import {Dependent} from '../dependents/dependent.model';
import {IPerson} from '../interfaces/iperson.interface';
import { Constants } from '../constants';
import { Utilities } from '../utilities';

export class Employee implements IPerson {

  name: string;  
  salaryPerPeriod: number;
  dependents: Array<Dependent> = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salaryPerPeriod = salary;
  }  
    
  get benefits(): number {
    return Utilities.GetBenefitsWithDiscounts(this, Constants.EMPLOYEE_ANNUAL_BENEFITS);
  }
  
  get benefitsPerPayPeriod(): number {
    return this.benefits / Constants.ANNUAL_PAYPERIODS;
  }
  
  get dependentBenefitsPerPayperiod(): number {
    let dependentBenefits: number = 0;

    this.dependents.forEach((dependent) => {
      dependentBenefits += dependent.benefitsPerPayPeriod;
    });

    return dependentBenefits;
  }

  get netSalaryPerPeriod(): number {
    let netSalary = this.salaryPerPeriod - this.benefitsPerPayPeriod - this.dependentBenefitsPerPayperiod;
    return netSalary;
  }

}


