// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Original addition function
//function addition(a, b) {
//    return a + b;
//  }

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
// function doubleAddition(c, d) {
//    var total = addition(c, d) * 2;
//    return total;
//  }

// Refactored function
doubleAddition = (c, d)
=> addition(c, d) * 2;

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 