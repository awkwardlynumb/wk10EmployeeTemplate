// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    this.role = "Intern";
    this.school = school;
    this.getSchool = function() {
      return this.github;
    };
    this.getRole = function() {
      return this.role;
    };
  }
}
