document.getElementById("currentDay").innerHTML=moment().format("dddd, MMM Do YYYY, h:mm a");

var textArray = JSON.parse(localStorage.getItem("events"));
console.log(textArray);

var id = document.getElementById("9am").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("9am").textContent= textArray[i].text;
}
}

var id = document.getElementById("10am").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("10am").textContent= textArray[i].text;
}
}
var id = document.getElementById("11am").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("11am").textContent= textArray[i].text;
}
}
var id = document.getElementById("12pm").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("12pm").textContent= textArray[i].text;
}
}
var id = document.getElementById("1pm").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("1pm").textContent= textArray[i].text;
}
}
var id = document.getElementById("2pm").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("2pm").textContent= textArray[i].text;
}
}
var id = document.getElementById("3pm").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("3pm").textContent= textArray[i].text;
}
}
var id = document.getElementById("4pm").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("4pm").textContent= textArray[i].text;
}
}
var id = document.getElementById("5pm").getAttribute("id");

for (i =0; i< textArray.length; i++){
if (textArray[i].time=== id){
   document.getElementById("5pm").textContent= textArray[i].text;
}
}


console.log(id);




$(".saveBtn").on("click", function() {
   
   var oldEvents = JSON.parse(localStorage.getItem("events"));
   var newEventsArray = [];

   if (oldEvents !== null){
      newEventsArray = oldEvents;
   }
   var time = ($(this).prev().prev().text());
   var text = ($(this).prev().val());
   console.log(time);
   console.log(text);
   var storageObject = {
      time : time,
      text : text
   }
   console.log(storageObject);
   newEventsArray.push(storageObject);
   

   var storageArray = JSON.stringify(newEventsArray);
localStorage.setItem("events",storageArray);   
   
});


var listOfHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var currentHour = moment().format("HH:mm")

for (i=0; i<listOfHours.length; i++) {
   // console.log([i]);
   var diff = moment([currentHour]).diff(moment([listOfHours[i]]));
   // console.log(diff);
   if (diff > 0) {
      $("#row" + i).addClass("past");
   }else if (diff == 0) {
      $("#row" + i).addClass("present");
   }else if (diff < 0) {
      $("#row" + i).addClass("future");
   };
};   


