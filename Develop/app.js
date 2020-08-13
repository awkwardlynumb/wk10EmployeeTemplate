const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { join } = require("path");

//Empty array to hold employees

const managerQ = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the team manager",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the id of the team manager",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the email of the team manager",
  },
];

const typeQ = {
  type: "list",
  name: "roleType",
  message: "Please enter the type of employee you're adding",
  choices: ["engineer", "intern"],
};

const allQ = [
  {
    type: "input",
    name: "name",
    message: "Please enter employee's name",
  },
  {
    type: "input",
    name: "ID",
    message: "Please enter employee's ID number",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter employee's email address",
  },
];

const specQ = [
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter manager's office number",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter engineer's github username",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter intern's school",
  },
];

const endQ = {
  type: "confirm",
  name: "more",
  message: "Would you like to add another employee?",
};

// inquirer.prompt(initQ).then(function (response) {
//     console.log(response);
// })
function init() {
  managerQ.push(specQ[0]);
  inquirer.prompt(managerQ).then(function (response) {
    console.log(response);
    // Make a manager using constructor function
    // Push manager into empty employees array
    // ask if they want another
    addAnother();
  });
}
init();

function createEngineer(questions) {
  inquirer.prompt(questions).then(function (response) {
    console.log(response);
  });
}

function createIntern(questions) {
  inquirer.prompt(questions).then(function (response) {
    console.log(response);
    // Make an itern, push it to our global employee team array
  });
}

function addAnother() {
  // Ask them do they want to add another employee.
  // If yes, ask engineer or intern?
  inquirer.prompt(endQ).then(function (response) {
    console.log(response);
    if (response.more === true) {
      inquirer.prompt(typeQ).then(function (response2) {
        if (response2.roleType === "engineer") {
          allQ.push(specQ[1]);
          createEngineer(allQ);
        } else {
          allQ.push(specQ[2]);
          createIntern(allQ);
        }
      });
    } else {
        writeToHtml();
    }
  });
}

function writeToHTML() {
   // render(the array of employees), will return a string
   // fs write to output
}

// Ask them what their manager's name, id, email, officeNumber are.
// Ask them do they want to add another employee.
// If yes, ask engineer or intern?
// Ask them employee's name, id, email, specQ (depending on engineer or intern)
// Ask them do they want to add another employee.
// If yes, ask engineer or intern?
// If no, write to HTML

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `main.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
