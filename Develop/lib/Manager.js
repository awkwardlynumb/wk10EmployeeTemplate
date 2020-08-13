// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email)
    this.role = "Manager";
    this.officeNumber = office;
    this.getOfficeNumber = function () {
      return this.officeNumber;
    };
    this.getRole = function () {
      return this.role;
    };
    this.getId = function () {
      return this.id
    }
  }
}

module.exports = Manager;
