// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// Define function to build table from data
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {
  // Create a date variable from value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // If statement in case a date is selected
  if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  buildTable(filteredData);
}

// Use D3 to listen for a click event
d3.selectAll("#filter-btn").on("click", handleClick);

// Build original table when the page loads
buildTable(tableData);