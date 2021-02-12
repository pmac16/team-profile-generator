const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer');

jest.mock('../lib/Employee.js');

test('has a github username', () => {
    const employee = new Employee('Dave');

    expect(employee.github).toBe('pmac16');
});


