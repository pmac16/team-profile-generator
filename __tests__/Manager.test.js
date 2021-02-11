const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('has an office number', () => {
    const employee = new Employee('Dave');

    expect(employee.officeNumber).toEqual(expect.any(Number));
});