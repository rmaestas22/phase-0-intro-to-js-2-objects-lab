// Write your solution in this file!

const employee = {
    name: '',
    streetAddress: '',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
   const employeecopy = {... employee}
    employeecopy[key] = value
   return employeecopy
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    const employeecopy = {...employee}
    delete employeecopy[key]
    return employeecopy
}
 function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
 }

