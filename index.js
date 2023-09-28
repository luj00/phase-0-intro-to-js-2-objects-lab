// Initialize the employee Object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator
    const updatedEmployee = { ...employee };
    
    // Update the key-value pair
    updatedEmployee[key] = value;
    
    // Return the new object
    return updatedEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original object
    employee[key] = value;
    
    // Return the entire updated employee object
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object using the spread operator, excluding the specified key
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    
    // Return the new object
    return updatedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key from the original object
    delete employee[key];
    
    // Return the entire updated employee object
    return employee;
  }
  
