import { employeeList } from "./employees.js";
import { customerList } from "./customers.js"

export const Workforce = () => {
    return `<h1>Workforce</h1>
    <div>
   ${employeeList()}
   </div>
   <div>
   ${customerList()}
   </div>`
}
