const Employee = require('../lib/Employee');

function Manager(officeNumber) {
    this.officeNumber = officeNumber;

    getRole = function() {
        Employee.role = 'Manager';
    }
};

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;

