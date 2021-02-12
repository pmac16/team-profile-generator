const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('has a school', () => {
    const employee = new Employee('Dave');

    expect(employee.school).toEqual(expect.any(String));
});
