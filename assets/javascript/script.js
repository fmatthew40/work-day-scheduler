// displays the current day at the top under title and subheading
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

changeColor();
// Change text area color depending on past/present/future
// currentHour was not working correctly when in place of moment().hours() so I used moment().hours() in place of currentHour.
var currentHour = moment().hours();

function changeColor() {
if (moment().hours() > 9) {
    $("#nine").addClass("past");
}if (moment().hours() < 9){
    $("#nine").addClass("future");
}if (moment().hours() === 9){
    $("#nine").addClass("present");
 };

 if (moment().hours() > 10) {
    $("#ten").addClass("past");
}if (moment().hours() < 10){
    $("#ten").addClass("future");
}if (moment().hours() === 10){
    $("#ten").addClass("present");
 };

 if (moment().hours() > 11) {
    $("#eleven").addClass("past");
}if (moment().hours() < 11){
    $("#eleven").addClass("future");
}if (moment().hours() === 11){
    $("#eleven").addClass("present");
 };

 if (moment().hours() > 12) {
    $("#twelve").addClass("past");
}if (moment().hours() < 12){
    $("#twelve").addClass("future");
}if (moment().hours() === 12){
    $("#twelve").addClass("present");
 };

 if (moment().hours() > 13) {
    $("#one").addClass("past");
}if (moment().hours() < 13){
    $("#one").addClass("future");
}if (moment().hours() === 13){
    $("#one").addClass("present");
 };

 if (moment().hours() > 14) {
    $("#two").addClass("past");
}if (moment().hours() < 14){
    $("#two").addClass("future");
}if (moment().hours() === 14){
    $("#two").addClass("present");
 };

 if (moment().hours() > 15) {
    $("#three").addClass("past");
}if (moment().hours() < 15){
    $("#three").addClass("future");
}if (moment().hours() === 15){
    $("#three").addClass("present");
 };

 if (moment().hours() > 16) {
    $("#four").addClass("past");
}if (moment().hours() < 16){
    $("#four").addClass("future");
}if (moment().hours() === 16){
    $("#four").addClass("present");
 };

 if (moment().hours() > 17) {
    $("#five").addClass("past");
}if (moment().hours() < 17){
    $("#five").addClass("future");
}if (moment().hours() === 17){
    $("#five").addClass("present");
 };

 if (moment().hours() > 18) {
    $("#six").addClass("past");
}if (moment().hours() < 18){
    $("#six").addClass("future");
}if (moment().hours() === 18){
    $("#six").addClass("present");
 };
};

// Refreshes Page Every 15 minutes to ensure past/present/future classes are updated
setInterval(function() {
    location.reload();
    console.log("page Reloaded");
  }, 900000);

// function to save 

$(".savebutton").on("click", function(){
    var comment = $(this).siblings(".commentarea").val();
    console.log(comment);
    var workhour = $(this).siblings(".time").text();
    console.log(workhour);
    localStorage.setItem(workhour, JSON.stringify(comment));
});



