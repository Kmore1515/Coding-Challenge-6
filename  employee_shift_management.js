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