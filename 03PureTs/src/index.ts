class User {

  // email: string
  // name: string
  // contact: number
  // city: string = "Jaipur"

  // constructor(email: string, name: string, contact: number){
  //     this.email = email;
  //     this.name = name;
  //     this.contact = contact;
      

  // }

  protected _courseCount = 1

  
  constructor(
    public email: string, 
    public name: string, 
    public contact: number
  ){

  }

  private deletetoken(){
    console.log("token deleted");
    
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum){
    if(courseNum <= 1){
      throw new Error("Course count should be more than 1")
    }
    this._courseCount= courseNum
  }


  
}


class subUser extends User{

  public isFamily: boolean = true
  changeCourseCount(){
    return this._courseCount = 4
  }
    
  }

const Huppyyy =  new User("adut@.com", "huppyy", 95494142433)
// Huppyyy.city = "delhi"