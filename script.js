//display current time / day via momentjs
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMM Do YYYY, h:mm a");

var listOfHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var currentHour = moment().format("HH:mm")

var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var currenttimeinmil = moment().format("HH");
//step 2 get current military hour to style the input field for current /future / past
console.log(currenttimeinmil)
//step 1 dynamically create the calender with associated times, id, and classes


for (var i = 0; i < timeArray.length; i++) {
   var div = $("<div>");
   //<div></div>
   div.attr("id", "row0");
   //<div id="row0"></div>
   div.attr("class", "row");
   //<div id="row0" class="row"></div>

   var div2 = $("<div>");
   //<div></div>
   div2.attr("id", "hour");
   //<div id="hour"></div>
   div2.attr("class", "col-lg-1 hour");
   //<div id="hour" class="col-lg-1 hour"></div>
   div2.attr("dataValue", timeArray[i]);
   //<div id="hour" class="col-lg-1 hour" dataValue="9"></div>
   //WHEN I view the timeblocks for that day
   //THEN each timeblock is color coded to indicate whether it is in the past,
   
   if (timeArray[i] < 13) {
      div2.text(timeArray[i] + "am");
   }
   else //subtract by 12 and use pm
   {
      div2.text(timeArray[i] - 12 + "pm");
   }

   //<div id="hour" class="col-lg-1 hour" dataValue="9">9am</div>

   var textarea = $("<textarea>");
   //<textarea></textarea>
   textarea.attr("id", timeArray[i]);
   
   console.log(currenttimeinmil - timeArray[i])
   if (currenttimeinmil - timeArray[i] == 0) { textarea.attr("class", "col-lg-10  texta present"); }
   if (currenttimeinmil - timeArray[i] < 0) { textarea.attr("class", "col-lg-10 texta past"); }
   if (currenttimeinmil - timeArray[i] > 0) { textarea.attr("class", "col-lg-10 texta future"); }
   //<textarea id="9am" class="col-lg-10"></textarea>

   var btn = $("<button>");
   //<button></button>
   btn.attr("class", "col-lg-1 saveBtn");
   //<button class="col-lg-1 saveBtn"></button>
   btn.text("save");
   //<button class="col-lg-1 saveBtn">save</button>
   //we are now nesting the divs, textarea, and btn
   div.append(div2);
   div.append(textarea);
   div.append(btn);
   //stick to html
   $(".container").append(div);
}

//display times with comment field and associated btn

var textArray = JSON.parse(localStorage.getItem("events"));
console.log(textArray);

var curennttime = moment().format("dddd, MMM Do YYYY, h:mm a");

$(".saveBtn").on("click", function () {
   console.log($(this).parent().children().children().prevObject[1])
   var curhour = $(this).parent().children().children().prevObject[1].id;
   //the hour, and we got it sucessfully
   console.log($(this).parent().children().children().prevObject[1].id);

   console.log($(this).parent().children().children().prevObject[1])
   //getting the value  THIS DOES NOT WORK NEED TO WORK ON IT
   var temp = "asdsda";
   console.log(temp)
   //set this val to local storage
   localStorage.setItem(curhour, temp);

   //create another jquery if there is value for that specific hour    
   //    var oldEvents = JSON.parse(localStorage.getItem("events"));
   //    var newEventsArray = [];

   //    if (oldEvents !== null){
   //       newEventsArray = oldEvents;
   //    }
   //    var time = ($(this).prev().prev().text());
   //    var text = ($(this).prev().val());
   //    console.log(time);
   //    console.log(text);
   //    var storageObject = {
   //       time : time,
   //       text : text
   //    }
   //    console.log(storageObject);
   //    newEventsArray.push(storageObject);


   //    var storageArray = JSON.stringify(newEventsArray);
   // localStorage.setItem("events",storageArray);   

});
