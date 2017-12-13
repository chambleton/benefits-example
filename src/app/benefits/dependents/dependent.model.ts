import { IPerson } from '../interfaces/iperson.interface';
import { Constants } from '../constants';
import { Utilities } from '../utilities';

export class Dependent implements IPerson {
    
  name: string;    

  constructor(name: string) {
    this.name = name;      
  }

  get benefits(): number {
    return Utilities.GetBenefitsWithDiscounts(this, Constants.DEPENDENT_ANNUAL_BENEFITS);
  }

  get benefitsPerPayPeriod(): number {
    return this.benefits / Constants.ANNUAL_PAYPERIODS;
  }

}
