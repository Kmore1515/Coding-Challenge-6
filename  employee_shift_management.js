// Task 1: Create an Employees Array of Employee Objects
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] }, // Sample dataset that was provided.
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];
// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employeeName) {
    let employee = employees.find(employee => employee.name === employeeName);
    if (employee) {
        console.log(`${employee.name} has the following shifts`);
        for (let shift of employee.shifts) {
            console.log(`Day(s): ${shift.day}, Hours: ${shift.hours}`); 
        }
    }   else {console.log("ERROR: Employee not in database.");}
};
displayEmployeeShifts("Sara");