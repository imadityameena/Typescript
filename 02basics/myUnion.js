"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var aditya = { name: "aditya", id: 345 };
aditya = { username: "huppy", id: 56 };
function getDbId(id) {
    //making some API calls
    console.log("DB id is ".concat(id));
}
getDbId(3);
getDbId("3");
function getdbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, "3", true];
