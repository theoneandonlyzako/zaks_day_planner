    var something = moment().format('HHHH ');
    // current day on page load
    var update = function() {
        // $("#currentDay").text(moment().format("dddd, MMMM Do YYYY,document.getElementById("currentDay").innerHTML;
       
        var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
       
        document.getElementById("currentDay").innerHTML = today;
    }
    // Refreshes page every .1 second to display time in Real Time
    setInterval(update, 100);
      
// debugger;
    
    // Saves input text when clicking on save button
    $('#hour .description')
    .val(localStorage.getItem(nine))

    // save text values when save button is clicked
  $("button").on("click", function(){
    // debugger;
          $('input, select, textarea').each(function() {
           var value = $(this).val(), name = $(this).attr('name');
           localStorage[name] = value;
           console.log(name, value);   
           localStorage.setItem(name, value);
      })
    });

// couldnt get this to work... 
// document.getElementById("saveToDo-0").addEventListener("click", saveIt)
// function saveIt() {
//         // debugger;
//                var value = $(this).val(), name = $(this).attr('name');
//                localStorage[name] = value;
//                console.log(name, value);   
//                localStorage.setItem(name, value);
//           };


    //   runs upon refresh
$(document).ready(function(){
    var something = localStorage.getItem("9am-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#nine").val(something);

    var something = localStorage.getItem("10am-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#ten").val(something);

    var something = localStorage.getItem("11am-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#eleven").val(something);

    var something = localStorage.getItem("12pm-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#twelve").val(something);

    var something = localStorage.getItem("1pm-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#one").val(something);

    var something = localStorage.getItem("2pm-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#two").val(something);

    var something = localStorage.getItem("3pm-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#three").val(something);

    var something = localStorage.getItem("4pm-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#four").val(something);

    var something = localStorage.getItem("5pm-todo", "value");
    var value = $(this).val().trim(), name = $(this).attr('name');
    localStorage[name] = value;
    console.log(something);   
    $("#five").val(something);
});

// Clears page when trash button is clicked
$("#clear").on("click", function(){
    // debugger;
          $('input, select, textarea').each(function() {
           var value = $(this).val(), name = $(this).attr('name');
        //    localStorage[name] = value;
           console.log(name, value);   
           localStorage.removeItem(name, value);
      }).then(location.reload())});

//  Changes text area color based on TOD for each row
function getStylesheet() {
    var currentTime = something
    console.log(something);
    
    // 9:00am
    if (currentTime < 0900) {
    var element = document.getElementById("nine");
    element.classList.add("future");
} else if (currentTime <= 0959) {
    var element = document.getElementById("nine");
    element.classList.add("present");
} else if (currentTime > 0959) {
    var element = document.getElementById("nine");
    element.classList.add("past");
} 
// 10:00am
    if (currentTime < 1000) {
    var element = document.getElementById("ten");
    element.classList.add("future");
} else if (currentTime <= 1059) {
    var element = document.getElementById("ten");
    element.classList.add("present");
} else if (currentTime > 1059) {
    var element = document.getElementById("ten");
    element.classList.add("past");
} 
// 11:00am
    if (currentTime < 1100) {
    var element = document.getElementById("eleven");
    element.classList.add("future");
} else if (currentTime <= 1159) {
    var element = document.getElementById("eleven");
    element.classList.add("present");
} else if (currentTime > 1159) {
    var element = document.getElementById("eleven");
    element.classList.add("past");
} 
//  12:00pm
    if (currentTime < 1200) {
    var element = document.getElementById("twelve");
    element.classList.add("future");
} else if (currentTime <= 1259) {
    var element = document.getElementById("twelve");
    element.classList.add("present");
} else if (currentTime > 1259) {
    var element = document.getElementById("twelve");
    element.classList.add("past");
} 
//  1:00pm
    if (currentTime < 1300) {
    var element = document.getElementById("one");
    element.classList.add("future");
} else if (currentTime <= 1359) {
    var element = document.getElementById("one");
    element.classList.add("present");
} else if (currentTime > 1359) {
    var element = document.getElementById("one");
    element.classList.add("past");
} 
// 2:00pm
    if (currentTime < 1400) {
    var element = document.getElementById("two");
    element.classList.add("future");
} else if (currentTime <= 1459) {
    var element = document.getElementById("two");
    element.classList.add("present");
} else if (currentTime > 1459) {
    var element = document.getElementById("two");
    element.classList.add("past");
} 
    // 3:00pm
    if (currentTime < 1500) {
        var element = document.getElementById("three");
        element.classList.add("future");
    } else if (currentTime <= 1559) {
        var element = document.getElementById("three");
        element.classList.add("present");
    } else if (currentTime > 1559) {
        var element = document.getElementById("three");
        element.classList.add("past");
    } 
       // 4:00pm
       if (currentTime < 1600) {
        var element = document.getElementById("four");
        element.classList.add("future");
    } else if (currentTime <= 1659) {
        var element = document.getElementById("four");
        element.classList.add("present");
    } else if (currentTime > 1659) {
        var element = document.getElementById("four");
        element.classList.add("past");
    } 
           // 5:00pm
        if (currentTime < 1759) {
        var element = document.getElementById("five");
        element.classList.add("future");
    } else if (currentTime <= 1759) {
        var element = document.getElementById("five");
        element.classList.add("present");
    } else if (currentTime > 1759) {
        var element = document.getElementById("five");
        element.classList.add("past");
    } 
};
 getStylesheet()

 setInterval(function() {
    window.location.reload();
  }, 600000); 


// function getStylesheet() {
//     var currentTime = new Date().getHours();
//     if (0 <= currentTime&&currentTime < 5) {
//      document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
//     }
//     if (5 <= currentTime&&currentTime < 11) {
//      document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
//     }
//     if (11 <= currentTime&&currentTime < 16) {
//      document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
//     }
//     if (16 <= currentTime&&currentTime < 22) {
//      document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
//     }
//     if (22 <= currentTime&&currentTime <= 24) {
//      document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
//     }
// };
// getStylesheet();
