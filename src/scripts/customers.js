import { getCustomers, getEmployeeCustomers, getEmployees } from "./dataAccess.js";

const customerListItem = (customer) => {
    const employeeCustomers = getEmployeeCustomers()
    const employees = getEmployees()

    let html = ""
    const relationships = employeeCustomers.filter(employeeCustomer => (employeeCustomer.customerId === customer.id))
    const customerEmployees = relationships.map((relationship) =>
        employees.find((employee) => { return employee.id === relationship.employeeId }
        ))


    html += `<div>${customer.name} has worked with:
            <ul>`
    customerEmployees.map((employee) => {
        html += `<li> ${employee.firstName} ${employee.lastName} </li>`
    })
    html += `</ul></div>`
    return html
}

export const customerList = () => {
    const customers = getCustomers()
    let html = ""
    let listItems = customers.map(customerListItem)
    html += listItems.join("")
    return html
}