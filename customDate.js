var todayDate = new Date();
console.log('Today Date: ' + todayDate);

//Trip start date
var start_date_gap = 7;
var start_date = new Date(todayDate);
start_date.setDate(todayDate.getDate() + start_date_gap);
console.log('Start Date: ' + start_date);

var start_year = start_date.getFullYear(); // Corrected to call the function `getFullYear()`
var start_month = String(start_date.getMonth() + 1).padStart(2, "0");
var start_day = String(start_date.getDate()).padStart(2, "0");

var formattedStartDate = `${start_year}-${start_month}-${start_day}T18:30:00.000Z`;
// exportsGlobal.startDate = formattedStartDate;
console.log('Formatted Start Date:', formattedStartDate);

//Trip end date
var end_date_gap = 14;
var end_date = new Date(todayDate);
end_date.setDate(todayDate.getDate() + end_date_gap);
console.log('End Date: ' + end_date);

var end_year = end_date.getFullYear(); // Corrected to call the function `getFullYear()`
var end_month = String(end_date.getMonth() + 1).padStart(2, "0");
var end_day = String(end_date.getDate()).padStart(2, "0");

var formattedEndtDate = `${end_year}-${end_month}-${end_day}T18:30:00.000Z`;
// exportsGlobal.endDate = formattedEndtDate;
console.log('Formatted End Date:', formattedEndtDate);

//Trip duration
var duration = end_date_gap - start_date_gap;
// exportsGlobal.duration = duration;
console.log('Duration:', duration);