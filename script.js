//put current day using moment
//compare current hour with time blocksng to the time block 
//use CSS classes for present/past/future
//compare time blocks with moment()
//if moment()> time blocks =>past
//if moment() == time  block =>present
//if moment() < time blocks = future
// grab textarea value and store it in localStorage
var timeBlockArr=[9,10,11,12,13,14,15,16,17,18,19,20]

var currenthour= moment().hour()
var currentDay =$("#currentDay")
console.log(currenthour)


var systemTime=moment().format("dddd, MMMM Do")
currentDay.text(systemTime)