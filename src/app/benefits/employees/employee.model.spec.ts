
import { Employee } from './employee.model';
import { Dependent } from '../dependents/dependent.model';


describe('EmployeeModel', () => {    
  var salary: number = 2000;

  it('should set the name when created', () => {
    var emp: Employee = new Employee("abc", salary);
    expect(emp.name).toBe("abc");
    expect(emp.salaryPerPeriod).toBe(salary);
  });

  it('should set the benefits when created', () => {
    var emp: Employee = new Employee("def", salary);
    expect(emp.benefits).toBe(1000);
  });

  it('should get the discount benefits for A names', () => {
    var emp: Employee = new Employee("ABC", salary);
    expect(emp.benefits).toBe(900);
  });

  it('should get the discount benefits for a names', () => {
    var emp: Employee = new Employee("abc", salary);
    expect(emp.benefits).toBe(900);
  });

  it('should get payperiod benefits', () => {
    var emp: Employee = new Employee("def", salary);
    expect(emp.benefitsPerPayPeriod).toBe(1000/26);
  });

  it('should get payperiod benefits for A names', () => {
    var emp: Employee = new Employee("abc", salary);
    expect(emp.benefitsPerPayPeriod).toBe(900/26);
  });

  it('should get netsalary per payperiod', () => {
    var emp: Employee = new Employee("def", salary);
    expect(emp.netSalaryPerPeriod.toFixed(2)).toBeCloseTo(1961.54);
  });

  it('should get netsalary per payperiod for A names', () => {
    var emp: Employee = new Employee("abc", salary);    
    expect(emp.netSalaryPerPeriod.toFixed(2)).toBeCloseTo(1965.38);
  });

  it('should get netsalary per payperiod with dependents', () => {
    var emp: Employee = new Employee("def", salary);
    emp.dependents.push(new Dependent("bbb"));
    emp.dependents.push(new Dependent("ccc"));
    expect(emp.netSalaryPerPeriod.toFixed(2)).toBeCloseTo(1923.08);
  });

  it('should get netsalary per payperiod with dependents for emp A names', () => {
    var emp: Employee = new Employee("abc", salary);
    emp.dependents.push(new Dependent("bbb"));
    emp.dependents.push(new Dependent("ccc"));    
    expect(emp.netSalaryPerPeriod.toFixed(2)).toBeCloseTo(1926.92);
  });

  it('should get netsalary per payperiod with dependents for dep A names', () => {
    var emp: Employee = new Employee("bcd", salary);
    emp.dependents.push(new Dependent("abc"));
    emp.dependents.push(new Dependent("ccc"));    
    expect(emp.netSalaryPerPeriod.toFixed(2)).toBeCloseTo(1925.00);
  });

  it('should get netsalary per payperiod with dependents for both A names', () => {
    var emp: Employee = new Employee("abc", salary);
    emp.dependents.push(new Dependent("abc"));
    emp.dependents.push(new Dependent("ccc"));    
    expect(emp.netSalaryPerPeriod.toFixed(2)).toBeCloseTo(1928.85);
  });

  it('should get dependent benefits per payperiod for 0 dep', () => {
    var emp: Employee = new Employee("abc", salary);    
    expect(emp.dependentBenefitsPerPayperiod).toBeCloseTo(0);
  });

  it('should get dependent benefits per payperiod with 1 dependent', () => {
    var emp: Employee = new Employee("def", salary);
    emp.dependents.push(new Dependent("bbb"));    
    expect(emp.dependentBenefitsPerPayperiod.toFixed(2)).toBeCloseTo(19.23);
  });

  it('should get dependent benefits per payperiod with dependents', () => {
    var emp: Employee = new Employee("def", salary);
    emp.dependents.push(new Dependent("bbb"));
    emp.dependents.push(new Dependent("ccc"));
    expect(emp.dependentBenefitsPerPayperiod.toFixed(2)).toBeCloseTo(38.46);
  });

  it('should get dependent benefits per payperiod with dependents for dep A names', () => {
    var emp: Employee = new Employee("bcd", salary);
    emp.dependents.push(new Dependent("abc"));
    emp.dependents.push(new Dependent("ccc"));    
    expect(emp.dependentBenefitsPerPayperiod.toFixed(2)).toBeCloseTo(36.54);
  });

  it('should get dependent benefits per payperiod with 1 dependent for dep A names', () => {
    var emp: Employee = new Employee("bcd", salary);
    emp.dependents.push(new Dependent("abc"));    
    expect(emp.dependentBenefitsPerPayperiod.toFixed(2)).toBeCloseTo(17.31);
  });

});
