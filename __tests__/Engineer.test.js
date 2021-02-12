const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('has a github username', () => {
    const employee = new Employee('Dave');

    expect(employee.github).toEqual(expect.any(String));
});


