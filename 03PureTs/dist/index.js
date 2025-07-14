"use strict";
class User {
    constructor(email, name, contact) {
        this.email = email;
        this.name = name;
        this.contact = contact;
        // email: string
        // name: string
        // contact: number
        // city: string = "Jaipur"
        // constructor(email: string, name: string, contact: number){
        //     this.email = email;
        //     this.name = name;
        //     this.contact = contact;
        // }
        this._courseCount = 1;
    }
    deletetoken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        return this._courseCount = 4;
    }
}
const Huppyyy = new User("adut@.com", "huppyy", 95494142433);
// Huppyyy.city = "delhi"
