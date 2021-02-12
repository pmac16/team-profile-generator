const Employee = require('../lib/Employee');

function Intern(school) {
    this.school = school;

    getSchool = function() {
        return this.school;
    }

    getRole = function() {
        Employee.role = Intern;
    }
};

// Manager.prototype = Object.create(Employee.prototype);

module.exports = Intern;

