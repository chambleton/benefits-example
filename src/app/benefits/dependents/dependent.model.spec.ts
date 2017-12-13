import { Dependent } from './dependent.model';

describe('DependentModel', () => {    

  it('should set the name when created', () => {
    var dep: Dependent = new Dependent("abc");
    expect(dep.name).toBe("abc");
  });

  it('should set the benefits when created', () => {
    var dep: Dependent = new Dependent("def");
    expect(dep.benefits).toBe(500);
  });

  it('should get the discount benefits for A names', () => {
    var dep: Dependent = new Dependent("ABC");
    expect(dep.benefits).toBe(450);
  });

  it('should get the discount benefits for a names', () => {
    var dep: Dependent = new Dependent("abc");
    expect(dep.benefits).toBe(450);
  });

  it('should get payperiod benefits', () => {
    var dep: Dependent = new Dependent("def");
    expect(dep.benefitsPerPayPeriod).toBe(500/26);
  });

  it('should get payperiod benefits for A names', () => {
    var dep: Dependent = new Dependent("abc");
    expect(dep.benefitsPerPayPeriod).toBe(450/26);
  });

});
