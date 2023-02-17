import { getEmployees, getComputers, getDepartments, getLocations, getCustomers, getEmployeeCustomers } from "./dataAccess.js";


const employeeListItem = (employee) => {
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const customers = getCustomers()
    const empCusRelationships = getEmployeeCustomers()

    //filter and find issues need to resolve



    //map through customer array
    //.find within map^^
    const matchedComputer = computers.find(computer => computer.id === employee.computerId)
    const matchedDepartment = departments.find(department => department.id === employee.departmentId)
    const matchedLocation = locations.find(location => location.id === employee.locationId)

    const relationships = empCusRelationships.filter(empCusRelationship => (empCusRelationship.employeeId === employee.id))
    const customersAssignedToEmployees = relationships.map((relationship) =>
        customers.find((customer) => { return customer.id === relationship.customerId }
        ))


    let html = `<div class="employee">
        <header class="employee__name">
            <h1>${employee.firstName} ${employee.lastName}</h1>
        </header>
        <section class="employee__computer">
            Currently using a ${matchedComputer.year} ${matchedComputer.model}

            </section>
            <section class="employee__department">
            Works in the ${matchedDepartment.name} department
            </section>
            <section class="employee__location">
            Works at the ${matchedLocation.name} location
            </section>
            <section class="employee__customers">
            Has worked for the following customers.
                <ul>`
    customersAssignedToEmployees.map((customer) => {
        html += `<li>${customer.name}</li>`
    })
    html += `</ul>
                </section>
                </div>`
    return html

}

export const employeeList = () => {


    const employees = getEmployees()
    let html = ""
    let listItems = employees.map(employeeListItem)
    html += listItems.join("")
    return html
}
