function Employee(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;

    getName = function() {
        return this.name;
    }

    getEmail = function() {
        return this.email;
    }

    getId = function() {
        return this.id;
    }

    getRole = function () {
        return employee
    }

}

module.exports = Employee;