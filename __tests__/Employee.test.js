const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js')

//test for an object

test('has a name', () => {
    const employee = new Employee('Dave');
    
    expect(employee.name).toBe('Dave');
    
});

test('has an email', () => {
    const employee = new Employee('Dave');

    expect(employee.email).toEqual(expect.stringContaining('@'))

});

test('has an id number', () => {
    const employee = new Employee('Dave');

    expect(employee.id).toEqual(expect.any(Number));
});

test('role is employee', () => {
    const employee = new Employee('Dave');

    expect(employee.role).toBe('employee');
});

// test('checks if getName method returns name', () => {
//     const employee = new Employee('Dave');

//     expect(employee.getName()).toBe('name');

// })

