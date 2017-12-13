import { Constants } from './constants';
import { IPerson } from './interfaces/iperson.interface';

export class Utilities {

  public static GetBenefitsWithDiscounts(person: IPerson, annualBenefitAmount: number): number {
    let benefits = annualBenefitAmount;

    if (Utilities.ShouldApplyDiscount(person)) {
      benefits = annualBenefitAmount - (annualBenefitAmount * Constants.NAME_DISCOUNT);
    }
    return benefits;
  }

  private static ShouldApplyDiscount(person: IPerson): boolean {
    let applyDiscount: boolean = false;

    if (person.name.substring(0,1).toUpperCase() === 'A') {
        applyDiscount = true;
    }
    return applyDiscount;
  }
}