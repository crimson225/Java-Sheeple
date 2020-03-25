// from data.js
var tableData = data;
tbody = d3.select("tbody");
// var table = document.getElementById("ufo-table");
// var row = table.insertRow(0);
// var cell1 = row.insertCell(0);
// YOUR CODE HERE!
function displayData(data) {

    // data file appending to table
    data.forEach(function(ufosight){
        new_tr=tbody.append("tr")
        Object.entries(ufosight).forEach(function([ufo,ufoinfo]){
            new_td = new_tr.append("td").text(ufoinfo)
        })
    })};


    //run function
displayData(tableData);

var inputDate = d3.select("#datetime");
var button = d3.select("filter-btn");

function clickButton(){
    d3.event.preventDefault();
    console.log(inputDate.property("value"));
    var table2 = tabledate.filter(ufosight => ufosight.datetime===inputDate.property("value"));
    displayData(table2);

    d3.select("#datetime").node().value="";
}

d3.select("#filter-btn").on("change",clickButton)