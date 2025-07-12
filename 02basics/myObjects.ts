// const User ={
//   name: "aditya",
//   email: "asfbhs.com",
//   isActive :  true  
// }

// function createUser({name:string, isPaid:boolean}){}


// let newUser = {name: "aditya", isPaid: true, email: "sfh@gmail.com"}


// createUser(newUser)



// function createCourse():{name:string, price:number}{
//   return {name:"typescript", price: 366}
// }


// type User = {
//   name: string;
//   email : string;
//   isActive: boolean

// }

// function createUser(user: User): User{
//   return {name:"", email:"", isActive:true}
// }

// createUser({name:"", email:"", isActive: true})


type User = {
    readonly  _id: string
    name: string
    email: string
    isActive: boolean 
    credcardDetails?: number

}

let myUser: User =  {

  _id: "1234",
  name: "hupy",
  email: "ks@ks.com",
  isActive: false


}

type cardNumber = {
  cardnumber: string
}


type cardDate = {
  carddate: string
}


type cardDetails =  cardNumber & cardDate & {
  cvv: number
}

myUser.email = "asva@@jha.com"
// myUser._id = "2646"







  export{}