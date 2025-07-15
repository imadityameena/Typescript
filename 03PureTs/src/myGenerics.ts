const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number) : boolean | number {
  return val
}

function identityTwo(val: any) : any {
  return val
}

function identityThree<type>(val: type): type {
  return val
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val
}


interface bottle{
  brand: string,
  type: number

}



// identityFour<bottle>({})


function getSearchProducts<type>(products: type[]): type {
   //do some database operations
  const myindex = 3
  return products[myindex]
}


const getMoreSearchProducts = <T,>(products: T[]): T => { //here we have put a , after T in <T,> just to show that this is not a jsx syntax its a generic. People do this in production level alot.
  //do some database operations
  const myIndex =  4
  return products[myIndex]
}


interface Database {
  name: string,
  id: number,
  login: boolean
}


function anotherFunction<T , U extends Database>(valOne: T, valtwo: U): object{
  return {
    valOne,
    valtwo
  }

}


// anotherFunction(3, {name:"as", id:12, login: true})

interface Quiz{
  name: string,
  type: String
}


interface Course{
  name: string,
  author: string,
  subject: string
}

class Sellable<T> {
  public cart: T[] = []

  addToCart(product: T){
    this.cart.push(product)
  }
}