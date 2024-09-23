// Task 1: Create an Employees Array of Employee Objects
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] }, // Sample dataset that was provided.
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
]
// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employeeName) {
    let employee = employees.find(employee => employee.name === employeeName) // Finding the employee in the array.
    if (!employee) {
        return `${employeeName} is not in database.`} // Incase a non-employee gets entered
        console.log(`${employeeName} has the following shifts`)
    return employee.shifts.map(shift =>{
        return `${shift.hours} hours on ${shift.day}` // This displays the shifts given.
        });
    
}
console.log(displayEmployeeShifts("John"));

