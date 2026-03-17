const accountID = 144355
let accountEmail = "khan@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 2 // This will throw an error because accountID is a constant and cannot be reassigned.
accountEmail = "hc@hc.com"
accountPassword = "54321"
accountCity = "Lahore"

console.log(accountID)

// prefer not to use var because of issue in block scope and functional scope.

console.table({accountID, accountEmail, accountPassword, accountCity, accountState})    


// aaj seekha let const aur var ke baare me