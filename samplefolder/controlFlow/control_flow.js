let unserRole = "admin";
let accessLevel;

if (unserRole ==="admin") {
    accessLevel = "Full access granted";
}else if (unserRole ==="manager") {
    accessLevel = "Limited access granted";
}else{
    accessLevel = "Access denied";
}

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;

if(isLoggedIn) {
    if(unserRole ==="admin") {
        userMessage ="Welcome, Admin!";
    }else{
        userMessage ="Welcome, User!";
    }
} else{
    userMessage ="Please log in to access the system.";
}

console.log("User Message:",userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory)

let isAuthenticated = true;
let authenticationStatus = isAuthenticated? "authenticated" : "not authenticated";

console.log("Auntentication Status:",authenticationStatus);