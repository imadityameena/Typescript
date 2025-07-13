let tUser: [string, number, boolean]

tUser = ["adha", 3, true]

let rgb: [number, number, number] = [255, 255, 122]

type User = [number, string]

const newUser : User = [112, "aditya"]

//Controolversial thing in tuples that it allows you to push and pop operations in arrays like why? it is tuples it cannot be chanegd but still it does overwrite and you can change the array type as well.
newUser[1] = "adkakdak"

//newUser.push(true) //now it is fixed.it doesnt allows it  anymore.