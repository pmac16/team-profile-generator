// const { thisTypeAnnotation } = require("@babel/types");

function Employee(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;

    this.getName() = function() {
        console.log(this.name)
    }

    this.getEmail() = function() {
        console.log(this.email);
    }

    this.getId() = function() {
        console.log(this.id);
    }

    this.getRole() = function () {
        return employee
    }

}