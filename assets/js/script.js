    // current day on page load
    var update = function() {
        document.getElementById("currentDay")
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    // Refreshes page every 1 second to display time in Real Time
    setInterval(update, 1000);
      

// debugger;


    // Saves input text when clicking on save button
  $("button").on("click", function(){
    // debugger;
          $('input, select, textarea').each(function() {
           var value = $(this).val(), name = $(this).attr('name');
           localStorage[name] = value;
           console.log(name, value);   
      })});








    // $("button").on("click", function(){
    //     localStorage.setItem("value", JSON.stringify(value));
    // });

    // var saveTasks = function() {
    //     localStorage.setItem("value", JSON.stringify(value));
    //   };


// $( document ).ready(function() {
//     console.log(localStorage);
//     value = JSON.parse(localStorage.getItem("value"));
//      // loop over object properties
//   $.each(value, function(list, arr) {
//     // console.log(list, arr);
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task.text, task.date, list);
//     });
//   });

// });

// value = JSON.parse(localStorage.getItem("value"));



//     $("button").on("click", function(){
//         $("input, select, textarea", function(){
//             var value = $(this).val();
//             localStorage.setItem('this', value)
//         console.log("clicked!"); 
//     })
// });
    


    // $("button").on("click", function(){
    //           $('input, select, textarea', function() {
    //            var value = $(this).val(),
    //                name = $(this).attr('name');
    //            localStorage[name] = value;
    //            console.log(value);   
    //       })});



    //   $("button").on("click", function(){
    //       $('input, select, textarea').each(function() {
    //        var value = $(this).val(),
    //            name = $(this).attr('name');
    //        localStorage[name] = value;
    //        console.log(value);   
    //   })});

// $( document ).ready(function() {
//     console.log(localStorage);
//     value = localStorage.getItem("value")
    //     console.log( "ready!" );

    //     $(localStorage).each(function() {
        
        // return(value)
    // });

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