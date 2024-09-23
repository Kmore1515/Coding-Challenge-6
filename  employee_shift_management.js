// Task 1: Create an Employees Array of Employee Objects
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] }, // Sample dataset that was provided.
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];
// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employeeName) {
    let employee = employees.find(employee => employee.name === employeeName); // Finding employee in array.
    if (employee) {
        console.log(`${employee.name} has the following shifts`); // Giving an output of who has the shifts.
        for (let shift of employee.shifts) {
            console.log(`Day(s): ${shift.day}, Hours: ${shift.hours}`); // A second output with a list of shifts and hours.
        }
    }   else {console.log("ERROR: Employee not in database.");} // In case a non-employee is inputted.
};
displayEmployeeShifts("Sara"); 

// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    let employee = employees.find(employee => employee.name === employeeName); // Same thing from last task to find the employee.
    if (!employee) {
        console.log("ERROR: Employee not in Database."); // Incase a non-employee is inputted.
        return;
    }
    let unavailable = employee.shifts.find(shift => shift.day === day); // Finding the availability.
    if (unavailable) {
        console.log(`ERROR: ${employeeName} is already scheduled.`); // If an employee is already scheduled an error message will appear.
        return;
    } 
    employee.shifts.push({day, hours});
    console.log(`${employeeName} has been assigned ${hours} hours on ${day}`) // Confirmation that the shift has been assigned.
    }
assignShift("John", "Thursday", 8)

// Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    let employee = employees.find(employee => employee.name === employeeName); // Searches the employees array
    if (!employee) {
        console.log("ERROR: Employee not in Database."); // Incase a non-employee is inputted.
        return};
    let totalhours = employee.shifts.reduce((total, shift) => total + shift.hours, 0); // uses .reduce to sum up all the hours.
    console.log(`${employeeName}'s total hours for the week are ${totalhours}`); // An output with the employees name and hours worked.
    }
calculateTotalHours("John")

// Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    let availableEmployees = employees.filter(employee => { // This is searching the data for employees without scheduled shifts.
        return !employee.shifts.some(shift => shift.day === day); 
    }
); if (availableEmployees > 0) { // If there are available then it will appear in the output.
    availableEmployees.forEach(employee => {
        console.log(`${employee.name} is available on ${day}`);
    });
}
    else console.log(`No available employees`)
}
listAvailableEmployees("Monday")