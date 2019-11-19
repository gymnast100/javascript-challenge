// from data.js - store data in a variable
var tableData = data;

// selecting table body to get a reference to table body
var tbody = d3.select("tbody");

// using forEach to iterate through array of objects from tableData
tableData.forEach(function(ufoSightings)
{
    // adding a row to the table body
    var row = tbody.append("tr");
    // Object.entries gets key and value for the object
    Object.entries(ufoSightings).forEach(function([key,value]){
    //    adding the data into each row cell
        var cell = row .append("td")
        cell.text(value);
     });
});
//  selecting specific id to get refence to the button
var button = d3.select("#filter-btn"); 

// using click handler and the on function to attach the handler function to the event 

button.on( "click" , function(){   
    var inputDate = d3.select("#datetime");
    // getting value of the input data
    var inputDateValue = inputDate.property("value");
    // filtering table data based on value of input data
    var filterdata = tableData.filter(ufoSightings => ufoSightings.datetime === inputDateValue);
    console.log(filterdata);
    // clearing the existing table data
    tbody.html("")
    
    // using filtered data to append rows and add data
    filterdata.forEach(function(ufoSightings)
    {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key,value]){
            var cell = row .append("td")
            cell.text(value);
        });
    });  
     
})
