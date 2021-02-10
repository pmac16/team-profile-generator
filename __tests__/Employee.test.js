// const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js')

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
})

// test('role is employee')