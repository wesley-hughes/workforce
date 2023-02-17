import { fetchComputers, fetchEmployees, fetchDepartments, fetchLocations, fetchCustomers, fetchEmployeeCustomers } from "./dataAccess.js"
import { Workforce } from "./Workforce.js"



const mainContainer = document.querySelector("#container")



const render = () => {
    fetchEmployees()
    .then(() => fetchComputers())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(
        () => {
            mainContainer.innerHTML = Workforce()
        }
    )
}

render()