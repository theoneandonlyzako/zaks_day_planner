    // current day on page load
    var update = function() {
        document.getElementById("currentDay")
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    // Refreshes page every 1 second to display time in Real Time
    setInterval(update, 1000);
      
    // Saves input text when clicking on save button
      $("button").on("click", function(){
          $('input, select, textarea').each(function() {
           var value = $(this).val(),
               name = $(this).attr('name');
           localStorage[name] = value;
           console.log(value);   
      })});

$( document ).ready(function() {
    console.log(localStorage);
    value = localStorage.getItem("value")
    //     console.log( "ready!" );

    //     $(localStorage).each(function() {
        
        // return(value)
    });

// value = JSON.parse(localStorage.getItem("value"));

// var loadTasks = function() {
    
    
    
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     // if (!value) {
//     //   value = {
//     //     toDo: [],
//     //   };
//     // }
  
//     // loop over object properties
//     $.each(value, function(list, arr) {
//       // console.log(list, arr);
//       // then loop over sub-array
//       arr.forEach(function(value) {
//         createvalue(value.text, value.date, list);
//       });
//     });
//   };
  

// Create an If statement to look thru each timeblock and change colors according to time past