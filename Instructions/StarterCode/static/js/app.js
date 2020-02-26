// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function ufoTable(tableData){
    tbody.html("");
    tableData.forEach((ufoData) =>{
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
});
}

ufoTable(tableData);



var button = d3.select("#filter-btn");

button.on("click", function() {
    tbody.html("")
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(row => row.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});